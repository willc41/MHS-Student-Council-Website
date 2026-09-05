// MHS Student Council — renders js/data.js into whichever page is loaded.
// Every render function checks the element exists first, so this one file
// can be safely included on every page. No build step needed.

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Nav toggle + active link ---------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("is-open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("is-open"))
  );

  const currentPage = location.pathname.split("/").pop() || "index.html";
  navLinks.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === currentPage) a.classList.add("is-active");
  });
}

/* ---------- Hero carousel (home) ---------- */
const heroSlidesEl = document.getElementById("heroSlides");
if (heroSlidesEl) {
  const photos = STUCO_DATA.heroCarousel;
  const dotsEl = document.getElementById("heroDots");
  const captionEl = document.getElementById("heroPhotoCaption");
  let heroIndex = 0;
  let heroTimer;

  heroSlidesEl.innerHTML = photos
    .map((p, i) => `<div class="hero-slide${i === 0 ? " is-active" : ""}" style="background-image:url('${p.src}');background-position:${p.focus || "center"}"></div>`)
    .join("");
  const slideEls = heroSlidesEl.querySelectorAll(".hero-slide");

  dotsEl.innerHTML = photos.map((_, i) => `<button aria-label="Show photo ${i + 1}"></button>`).join("");
  const dotEls = dotsEl.querySelectorAll("button");

  function showHeroSlide(i) {
    slideEls[heroIndex].classList.remove("is-active");
    dotEls[heroIndex].classList.remove("is-active");
    heroIndex = i;
    slideEls[heroIndex].classList.add("is-active");
    dotEls[heroIndex].classList.add("is-active");
    captionEl.textContent = photos[heroIndex].caption;
  }

  function nextHeroSlide() {
    showHeroSlide((heroIndex + 1) % photos.length);
  }

  function restartHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextHeroSlide, 4500);
  }

  dotEls.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      showHeroSlide(i);
      restartHeroTimer();
    })
  );

  showHeroSlide(0);
  restartHeroTimer();
}

/* ---------- Stats bar (home) ---------- */
const statsGrid = document.getElementById("statsGrid");
if (statsGrid) {
  const allMembers = [
    ...STUCO_DATA.officers.exec.members,
    ...STUCO_DATA.officers.classes.flatMap((c) => c.members),
  ];
  const totalLeaders = allMembers.length;
  const combinedYears = allMembers.reduce((sum, m) => sum + (m.years || 0), 0);
  // Exec board + every grade-level council, including ones still pending election.
  const totalCouncils = 1 + STUCO_DATA.officers.classes.length;

  const stats = [
    { number: String(totalCouncils), label: "Class Councils" },
    { number: String(totalLeaders), label: "Student Leaders" },
    { number: String(combinedYears), label: "Years of Combined Experience" },
  ];

  statsGrid.innerHTML = stats
    .map(
      (s) => `
    <div class="stat-card">
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>`
    )
    .join("");
}

/* ---------- News ---------- */
const newsList = document.getElementById("newsList");
const dateFmt = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

if (newsList) {
  if (STUCO_DATA.news.length === 0) {
    newsList.innerHTML = `<div class="empty-state"><div class="icon">📰</div><h3>No news yet</h3><p>Check back soon for updates.</p></div>`;
  } else {
    newsList.innerHTML = STUCO_DATA.news
      .map(
        (item) => `
      <article class="news-card">
        <time>${dateFmt(item.date)}</time>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`
      )
      .join("");
  }
}

/* ---------- Weekly video ---------- */
const videoFrame = document.getElementById("videoFrame");
if (videoFrame) {
  const videoTitleEl = document.getElementById("videoTitle");
  if (videoTitleEl) videoTitleEl.textContent = STUCO_DATA.weeklyVideo.title;

  if (STUCO_DATA.weeklyVideo.youtubeId) {
    // Embeds on brand new YouTube channels can take a while to become
    // available (YouTube-side processing delay, not a settings issue).
    // Linking out to the real video avoids showing visitors a broken
    // player in the meantime. Switch this back to a real <iframe> once
    // the embed is confirmed working. Thumbnail is a hand picked frame
    // (assets/img/video-thumbnail.jpg) rather than YouTube's auto
    // generated one, which is a blank gray frame for this video.
    const id = STUCO_DATA.weeklyVideo.youtubeId;
    videoFrame.innerHTML = `
      <a class="video-fallback" href="https://youtube.com/watch?v=${id}" target="_blank" rel="noopener">
        <img src="assets/img/video-thumbnail.jpg" alt="${STUCO_DATA.weeklyVideo.title} thumbnail" />
        <span class="video-fallback-play">&#9658;</span>
        <span class="video-fallback-label">Watch on YouTube</span>
      </a>`;
  } else {
    videoFrame.innerHTML = `
      <div class="video-placeholder">
        <div class="play-dot">▶</div>
        <p>This week's video hasn't been posted yet.<br />Add a YouTube ID in <code>js/data.js</code>.</p>
      </div>`;
  }
}

/* ---------- Officers ---------- */
const initials = (name) =>
  name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

// Add a "photo" field (e.g. "assets/img/officers/will-cohen.jpg") to any
// member in js/data.js to show a real headshot instead of initials.
// Add a "bio" field to any member in js/data.js to show a short paragraph
// when their card is clicked. Placeholder text for now; real bios to follow.
const officerCard = (member, isLead = false) => `
  <div class="officer-card ${isLead ? "is-lead" : ""}" tabindex="0" role="button" aria-expanded="false">
    <div class="officer-avatar">${
      member.photo
        ? `<img src="${member.photo}" alt="${member.name}" />`
        : initials(member.name)
    }</div>
    <h4>${member.name}${member.bio ? ` <span class="officer-chevron">▾</span>` : ""}</h4>
    <div class="role">${member.role}</div>
    ${member.bio ? `<p class="officer-bio">${member.bio}</p>` : ""}
  </div>`;

const officersContainer = document.getElementById("officersContainer");
if (officersContainer) {
  let html = `
    <div class="officer-group">
      <div class="officer-group-label">${STUCO_DATA.officers.exec.label}</div>
      <div class="officer-grid">
        ${STUCO_DATA.officers.exec.members
          .map((m) => officerCard(m, m.role === "President"))
          .join("")}
      </div>
    </div>`;

  html += STUCO_DATA.officers.classes
    .map((group) =>
      group.members.length === 0
        ? `
    <div class="officer-group">
      <div class="officer-group-label">${group.label}</div>
      <div class="empty-state">
        <h3>Elections pending</h3>
        <p>${group.pendingNote || "Officers haven't been elected yet. Check back soon."}</p>
      </div>
    </div>`
        : `
    <div class="officer-group">
      <div class="officer-group-label">${group.label}</div>
      <div class="officer-grid">
        ${group.members.map((m) => officerCard(m, m.role === "President")).join("")}
      </div>
    </div>`
    )
    .join("");

  officersContainer.innerHTML = html;

  const toggleOfficerCard = (card) => {
    const wasOpen = card.classList.contains("is-open");
    officersContainer.querySelectorAll(".officer-card.is-open").forEach((c) => {
      c.classList.remove("is-open");
      c.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      card.classList.add("is-open");
      card.setAttribute("aria-expanded", "true");
    }
  };

  officersContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".officer-card");
    if (card) toggleOfficerCard(card);
  });
  officersContainer.addEventListener("keydown", (e) => {
    const card = e.target.closest(".officer-card");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      toggleOfficerCard(card);
    }
  });
}

/* ---------- Events calendar ---------- */
const eventsContainer = document.getElementById("eventsContainer");
if (eventsContainer) {
  const pad2 = (n) => String(n).padStart(2, "0");
  const dateKey = (y, m, d) => `${y}-${pad2(m + 1)}-${pad2(d)}`;

  const eventsByDate = new Map();
  STUCO_DATA.events.forEach((e) => {
    const [y, m, d] = e.date.split("-").map(Number);
    const key = dateKey(y, m - 1, d);
    if (!eventsByDate.has(key)) eventsByDate.set(key, []);
    eventsByDate.get(key).push(e);
  });

  const today = new Date();
  const todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());

  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthLabels = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  let viewMode = "month";
  const refDate = new Date();

  eventsContainer.innerHTML = `
    <div class="calendar">
      <div class="calendar-toolbar">
        <div class="calendar-view-toggle" id="calendarViewToggle">
          <button type="button" data-view="month" class="is-active">Month</button>
          <button type="button" data-view="week">Week</button>
        </div>
      </div>
      <div class="calendar-nav">
        <button type="button" class="calendar-arrow" id="calendarPrev" aria-label="Previous">&#8249;</button>
        <div class="calendar-label" id="calendarLabel"></div>
        <button type="button" class="calendar-arrow" id="calendarNext" aria-label="Next">&#8250;</button>
      </div>
      <div class="calendar-grid" id="calendarGrid"></div>
      ${
        STUCO_DATA.events.length === 0
          ? `<p class="calendar-empty-note">No events scheduled yet. Check back soon, or add events in <code>js/data.js</code>.</p>`
          : ""
      }
    </div>`;

  const labelEl = document.getElementById("calendarLabel");
  const gridEl = document.getElementById("calendarGrid");
  const toggleEl = document.getElementById("calendarViewToggle");

  function startOfWeek(d) {
    const copy = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    copy.setDate(copy.getDate() - copy.getDay());
    return copy;
  }

  function getMonthCells(d) {
    const year = d.getFullYear();
    const month = d.getMonth();
    const startOffset = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7;
    const cells = [];
    for (let i = 0; i < totalCells; i++) {
      const dayNum = i - startOffset + 1;
      cells.push({ date: new Date(year, month, dayNum), isOutside: dayNum < 1 || dayNum > daysInMonth });
    }
    return cells;
  }

  function getWeekCells(d) {
    const start = startOfWeek(d);
    const cells = [];
    for (let i = 0; i < 7; i++) {
      cells.push({ date: new Date(start.getFullYear(), start.getMonth(), start.getDate() + i), isOutside: false });
    }
    return cells;
  }

  function renderLabel() {
    if (viewMode === "month") {
      labelEl.textContent = `${monthLabels[refDate.getMonth()]} ${refDate.getFullYear()}`;
    } else {
      const start = startOfWeek(refDate);
      const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6);
      const sameMonth = start.getMonth() === end.getMonth();
      const startStr = `${monthLabels[start.getMonth()].slice(0, 3)} ${start.getDate()}`;
      const endStr = sameMonth ? `${end.getDate()}` : `${monthLabels[end.getMonth()].slice(0, 3)} ${end.getDate()}`;
      labelEl.textContent = `${startStr} to ${endStr}, ${end.getFullYear()}`;
    }
  }

  function renderGrid() {
    const cells = viewMode === "month" ? getMonthCells(refDate) : getWeekCells(refDate);
    const weekdayHTML = weekdayLabels.map((w) => `<div class="calendar-weekday">${w}</div>`).join("");
    const dayHTML = cells
      .map(({ date, isOutside }) => {
        const key = dateKey(date.getFullYear(), date.getMonth(), date.getDate());
        const dayEvents = eventsByDate.get(key) || [];
        const isToday = key === todayKey;
        const eventsHTML = dayEvents
          .map(
            (e, idx) =>
              `<div class="calendar-event" data-date="${key}" data-idx="${idx}">${e.title}</div>`
          )
          .join("");
        return `
        <div class="calendar-day${isOutside ? " is-outside" : ""}${isToday ? " is-today" : ""}${
          viewMode === "week" ? " is-week" : ""
        }${dayEvents.length ? " has-events" : ""}" data-day-date="${key}">
          <div class="calendar-day-number">${date.getDate()}</div>
          <div class="calendar-day-events">${eventsHTML}</div>
        </div>`;
      })
      .join("");
    gridEl.className = `calendar-grid${viewMode === "week" ? " calendar-grid--week" : ""}`;
    gridEl.innerHTML = weekdayHTML + dayHTML;
  }

  function render() {
    renderLabel();
    renderGrid();
  }

  document.getElementById("calendarPrev").addEventListener("click", () => {
    if (viewMode === "month") refDate.setMonth(refDate.getMonth() - 1);
    else refDate.setDate(refDate.getDate() - 7);
    render();
  });
  document.getElementById("calendarNext").addEventListener("click", () => {
    if (viewMode === "month") refDate.setMonth(refDate.getMonth() + 1);
    else refDate.setDate(refDate.getDate() + 7);
    render();
  });
  toggleEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-view]");
    if (!btn) return;
    viewMode = btn.dataset.view;
    toggleEl.querySelectorAll("button").forEach((b) => b.classList.toggle("is-active", b === btn));
    render();
  });

  const eventModal = document.getElementById("eventModal");
  const eventModalDate = document.getElementById("eventModalDate");
  const eventModalTitle = document.getElementById("eventModalTitle");
  const eventModalLocation = document.getElementById("eventModalLocation");
  const eventModalDescription = document.getElementById("eventModalDescription");

  if (eventModal) {
    gridEl.addEventListener("click", (e) => {
      const dayEl = e.target.closest(".calendar-day");
      if (!dayEl) return;
      const key = dayEl.dataset.dayDate;
      const dayEvents = eventsByDate.get(key) || [];
      if (!dayEvents.length) return;
      const [y, m, d] = key.split("-").map(Number);
      const dateStr = new Date(y, m - 1, d).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      eventModalDate.textContent = dateStr;
      eventModalTitle.textContent = "";
      eventModalLocation.style.display = "none";
      eventModalDescription.style.display = "none";
      eventModalDescription.innerHTML = dayEvents
        .map(
          (evt) => `
        <div class="event-modal-item">
          <h3>${evt.title}</h3>
          ${evt.time ? `<div class="event-modal-location">${evt.time}</div>` : ""}
          ${evt.location ? `<div class="event-modal-location">${evt.location}</div>` : ""}
          ${evt.description ? `<p>${evt.description}</p>` : ""}
        </div>`
        )
        .join("");
      eventModalDescription.style.display = "block";
      eventModal.classList.add("is-open");
    });
    document.getElementById("eventModalClose").addEventListener("click", () => eventModal.classList.remove("is-open"));
    eventModal.addEventListener("click", (e) => {
      if (e.target === eventModal) eventModal.classList.remove("is-open");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") eventModal.classList.remove("is-open");
    });
  }

  render();
}

/* ---------- Committees ---------- */
const committeesContainer = document.getElementById("committeesContainer");
if (committeesContainer) {
  committeesContainer.innerHTML = STUCO_DATA.committees
    .map((c) => {
      const leadHTML = c.leads
        ? c.leads.map((l) => (l.email ? `<a href="mailto:${l.email}">${l.name}</a>` : l.name)).join(", ")
        : c.email
        ? `<a href="mailto:${c.email}">${c.lead}</a>`
        : c.lead;
      const leadLabel = c.leads && c.leads.length > 1 ? "Leads" : "Lead";
      return `
    <div class="accent-card">
      <h3>${c.name}</h3>
      <p>${c.description}</p>
      <div class="meta-row">
        ${c.cadence ? `<span class="meta">${c.cadence}</span>` : ""}
        <span class="meta">${leadLabel}: ${leadHTML}</span>
      </div>
    </div>`;
    })
    .join("");
}

/* ---------- Resources ---------- */
const resourcesGrid = document.getElementById("resourcesGrid");
if (resourcesGrid) {
  resourcesGrid.innerHTML = STUCO_DATA.resources
    .map(
      (r) => `
    <a class="resource-link" href="${r.href}">
      ${r.icon || r.logo ? `<span class="icon">${r.logo ? `<img src="${r.logo}" alt="${r.title} logo" />` : r.icon}</span>` : ""}
      <span>
        <span class="title">${r.title}</span><br />
        <span class="subtitle">${r.subtitle}</span>
      </span>
    </a>`
    )
    .join("");
}

/* ---------- Gallery ---------- */
const galleryGrid = document.getElementById("galleryGrid");
if (galleryGrid) {
  galleryGrid.innerHTML = STUCO_DATA.gallery
    .map((img) => `<img src="${img.src}" alt="${img.alt}" loading="lazy" />`)
    .join("");

  // Size each grid cell to match the photo's actual shape (instead of a
  // fixed pattern) so cropping stays minimal and nothing important gets
  // cut off, e.g. faces in a tall photo or the edges of a wide one.
  galleryGrid.querySelectorAll("img").forEach((img) => {
    const classifyLayout = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      if (ratio >= 1.4) img.classList.add("wide");
      else if (ratio <= 0.75) img.classList.add("tall");
    };
    if (img.complete && img.naturalWidth) classifyLayout();
    else img.addEventListener("load", classifyLayout, { once: true });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  galleryGrid.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      lightboxImg.src = e.target.src;
      lightboxImg.alt = e.target.alt;
      lightbox.classList.add("is-open");
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("is-open"));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("is-open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("is-open");
  });
}

/* ---------- Contact ---------- */
const contactLinks = document.getElementById("contactLinks");
if (contactLinks) {
  const { contact } = STUCO_DATA;
  contactLinks.innerHTML = `
    <a class="contact-link" href="https://instagram.com/${contact.instagram}" target="_blank" rel="noopener">
      <span class="contact-link-icon">${
        contact.instagramLogo ? `<img src="${contact.instagramLogo}" alt="" />` : "📷"
      }</span>
      <span><span class="tag">Instagram</span><span class="value">@${contact.instagram}</span></span>
    </a>
    <a class="contact-link" href="mailto:${contact.email}">
      <span>✉️</span>
      <span><span class="tag">Email</span><span class="value">${contact.email}</span></span>
    </a>
  `;
}

/* ---------- Follow MHS (other social accounts) ---------- */
const socialGrid = document.getElementById("socialGrid");
if (socialGrid) {
  const icons = {
    mhs27stuco: "📣",
    mhs_stuco28: "📣",
    mhsvarsitysports: "🏆",
    mamktigerstd: "🏈",
    mhsvideo_: "🎥",
    mamaroneck_public_schools: "🏫",
  };
  const platformUrl = (platform, handle) => {
    if (platform === "X") return `https://x.com/${handle}`;
    if (platform === "YouTube") return `https://youtube.com/@${handle}`;
    return `https://instagram.com/${handle}`;
  };

  socialGrid.innerHTML = STUCO_DATA.social
    .map(
      (s) => `
    <a class="resource-link" href="${platformUrl(s.platform, s.handle)}" target="_blank" rel="noopener">
      <span class="icon">${
        s.logo ? `<img src="${s.logo}" alt="${s.label} logo" />` : icons[s.handle] || "📷"
      }</span>
      <span>
        <span class="title">@${s.handle}</span>
        <span class="platform-tag">${s.platform}</span><br />
        <span class="subtitle">${s.label}</span>
      </span>
    </a>`
    )
    .join("");
}

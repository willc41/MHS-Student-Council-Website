// MHS Student Council — site content
// Edit this file to update officers, events, news, and contact info.
// No build step needed — just save and refresh the page.

const STUCO_DATA = {
  contact: {
    instagram: "mamaroneckhs", // Main school-wide Exec Stuco account
    instagramLogo: "assets/img/social/mamaroneckhs.jpg",
    email: "wcohen@student.mamkschools.org",
    school: "Mamaroneck High School",
  },

  // Other MHS-related accounts worth following, shown on the Contact page.
  // Add a "logo" field (e.g. "assets/img/social/jungle.jpg") to show a real
  // logo image instead of the category icon.
  social: [
    { handle: "MamaroneckHS_StudentCouncil", platform: "YouTube", label: "Our weekly video, The Week Ahead", logo: "assets/img/logo/logo.png" },
    { handle: "mhs27stuco", platform: "Instagram", label: "Class of 2027 Student Council", logo: "assets/img/social/mhs27stuco.jpg" },
    { handle: "mhs_stuco28", platform: "Instagram", label: "Class of 2028 Student Council", logo: "assets/img/social/mhs_stuco28.jpg" },
    { handle: "mhsvarsitysports", platform: "Instagram", label: "MHS Varsity Sports, The Jungle", logo: "assets/img/social/mhsvarsitysports.jpg" },
    { handle: "mhsvarsitysport", platform: "X", label: "MHS Varsity Sports, The Jungle", logo: "assets/img/social/mhsvarsitysports.jpg" },
    { handle: "mamktigerstd", platform: "Instagram", label: "MHS Football Support Club", logo: "assets/img/social/mamktigerstd.jpg" },
    { handle: "mhsvideo_", platform: "Instagram", label: "MHS Info, the Friday announcement video", logo: "assets/img/social/mhsvideo_.jpg" },
    { handle: "mamaroneck_public_schools", platform: "Instagram", label: "District News and Updates", logo: "assets/img/social/mamaroneck_public_schools.jpg" },
  ],

  // Homepage hero carousel. Captions are placeholders — edit to match what's
  // actually happening in each photo, or swap the photos entirely.
  heroCarousel: [
    { src: "assets/img/hero/hero-04.jpg", caption: "Senior Barbecue" },
    { src: "assets/img/hero/hero-03.jpg", caption: "Senior Citizen Prom" },
    { src: "assets/img/hero/hero-08.jpg", caption: "Tiger 5s Volleyball" },
    { src: "assets/img/hero/hero-01.jpg", caption: "Fall Pep Rally Warmups" },
    { src: "assets/img/hero/hero-06.jpg", caption: "Spirit Week, Themed Days", focus: "center 15%" },
    { src: "assets/img/hero/hero-07.jpg", caption: "Tiger 5s Students vs. Teachers Champions" },
  ],

  // Weekly Monday-morning announcement video. Swap the youtubeId each week.
  weeklyVideo: {
    title: "The Week Ahead",
    youtubeId: "tmNDAtcdMdg",
  },

  news: [
    {
      date: "2026-07-20",
      title: "Welcome to the new MHS Stuco site",
      body: "This site is where you'll find Stuco news, events, officers, and how to reach us.",
    },
    {
      date: "2026-06-01",
      title: "Officer elections wrapped up for 2026/2027",
      body: "See the Officers page for more information.",
    },
  ],

  events: [
    {
      date: "2026-09-02",
      title: "First day of school! Freshman orientation",
      description: "Student Council will be helping out with some first day and orientation activities.",
    },
  ],

  officers: {
    exec: {
      label: "Executive Board",
      members: [
        { name: "William Cohen", role: "President", photo: "assets/img/officers/william-cohen-3.jpg", years: 2, bio: "This is my second year on Student Council. Last year, I served as Vice President of the Executive Board and Head of Communications, where I led The Week Ahead and ran MHS's social media. Outside of Student Council, I'm going into my fourth year on the golf team, which I captain. I'm also the founder of Mamaroneck Student Capital, an extension of our investment club that gives students the chance to invest real money on behalf of the school. Separately, I run Finding FairWays, a golf mentorship program that connects and grows the game through partnerships between our high schoolers and local middle schoolers. I'm beyond excited to serve as President this year." },
        { name: "Owen Riter", role: "Vice President", photo: "assets/img/officers/owen-riter.jpg", years: 3, bio: "3 years on Student Council" },
        { name: "Greta Weiland", role: "Vice President", photo: "assets/img/officers/greta-weiland.jpg", years: 4, bio: "4 years on Student Council" },
        { name: "Olivia Perez", role: "Vice President", photo: "assets/img/officers/olivia-perez.jpg", years: 3, bio: "I am super excited to be one of MHS's Executive Vice Presidents this year! Last year, I served as Vice President of the Class of '28, supporting our grade and bringing school spirit to every event. In addition to Student Council, I will be a member of MHS Info and will continue with our Video Program as well as PACE. Outside of school, I am an intern with LMC Media, audition for film and TV, and train for climbing competitions. I am looking forward to another fun and memorable year with you all!" },
        { name: "Nina Patnode", role: "Vice President", photo: "assets/img/officers/nina-patnode.jpg", years: 3, bio: "3 years on Student Council" },
        { name: "Casey Huppert", role: "Vice President", photo: "assets/img/officers/casey-huppert.jpg", years: 3, bio: "3 years on Student Council" },
      ],
    },
    classes: [
      {
        label: "Class of 2027",
        members: [
          { name: "John Olsen", role: "President", photo: "assets/img/officers/john-olsen.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Jared Barrios", role: "Vice President", photo: "assets/img/officers/jared-barrios.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Christina Mason", role: "Treasurer", photo: "assets/img/officers/christina-mason.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Mark Lebowitz", role: "Class Representative", photo: "assets/img/officers/mark-lebowitz.jpg", years: 4, bio: "4 years on Student Council" },
          { name: "Cleo Ingalls", role: "Class Representative", photo: "assets/img/officers/cleo-ingalls.jpg", years: 4, bio: "4 years on Student Council" },
          { name: "Garrett Clarke", role: "Class Representative", photo: "assets/img/officers/garrett-clarke.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Sadie Bilik", role: "Class Representative", photo: "assets/img/officers/sadie-bilik.jpg", years: 4, bio: "4 years on Student Council" },
        ],
      },
      {
        label: "Class of 2028",
        members: [
          { name: "Sonya Prozes", role: "President", photo: "assets/img/officers/sonya-prozes.jpg", years: 3, bio: "3 years on Student Council" },
          { name: "Maya Schein", role: "Vice President", photo: "assets/img/officers/maya-schein.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Augustas Rastenis", role: "Treasurer", photo: "assets/img/officers/augustas-rastenis.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Annabelle Balagot", role: "Class Representative", photo: "assets/img/officers/annabelle-balagot.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Noelle Curry", role: "Class Representative", photo: "assets/img/officers/noelle-curry.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "George Haines", role: "Class Representative", photo: "assets/img/officers/george-haines.jpg", years: 3, bio: "3 years on Student Council" },
          { name: "Madelyn Dunphy", role: "Class Representative", photo: "assets/img/officers/madelyn-dunphy.jpg", years: 1, bio: "1 year on Student Council" },
        ],
      },
      {
        label: "Class of 2029",
        members: [
          { name: "Andrew Daum", role: "President", photo: "assets/img/officers/andrew-daum.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Sarina Lee", role: "Vice President", photo: "assets/img/officers/sarina-lee.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Michal Vaculin", role: "Treasurer", photo: "assets/img/officers/michal-vaculin.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Sloane Irwin", role: "Class Representative", photo: "assets/img/officers/sloane-irwin.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Jeevan Gupta", role: "Class Representative", photo: "assets/img/officers/jeevan-gupta.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Matthew Bernhardt", role: "Class Representative", photo: "assets/img/officers/matthew-bernhardt.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Jaylah Soto", role: "Class Representative", photo: "assets/img/officers/jaylah-soto.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Charles Zmuda", role: "Class Representative", photo: "assets/img/officers/charles-zmuda.jpg", years: 1, bio: "1 year on Student Council" },
        ],
      },
      {
        label: "Class of 2030",
        members: [],
        pendingNote: "Elections happen at the start of the school year. Check back soon!",
      },
    ],
  },

  // Curated event photos, assets/img/gallery/gallery-01.jpg .. gallery-31.jpg
  // gallery-01.jpg is used as the Gallery page header photo, so it's
  // excluded here to avoid showing it twice.
  gallery: Array.from({ length: 30 }, (_, i) => {
    const n = String(i + 2).padStart(2, "0");
    return { src: `assets/img/gallery/gallery-${n}.jpg`, alt: `MHS Stuco event photo ${n}` };
  }),

  committees: [
    {
      name: "DEIB Committee",
      cadence: "Meets biweekly",
      lead: "Jack Ilardo",
      email: "jilardo@student.mamkschools.org",
      description: "Diversity, Equity, Inclusion, and Belonging",
    },
    {
      name: "Social Events Committee",
      cadence: "Meets monthly",
      lead: "Owen Riter",
      email: "oriter@student.mamkschools.org",
      description: "Plans events like the spelling bee for the student body",
    },
    {
      name: "Prom Committee",
      cadence: "Seasonal activity",
      lead: "TBD",
      description: "Plans and runs the senior prom",
    },
    {
      name: "Junior Prom Committee",
      cadence: "Seasonal activity",
      lead: "TBD",
      description: "Plans and runs the junior prom",
    },
    {
      name: "Yearbook Committee",
      cadence: "Meets weekly",
      lead: "Cosette Ammon",
      email: "cammon@student.mamkschools.org",
      description: "Produces the school yearbook",
      // TODO: this committee is expected to be replaced by a new committee later on
    },
  ],

  // PLACEHOLDER — link these to real forms/documents when available
  resources: [
    {
      title: "Bake Sale Form",
      subtitle: "Request approval for a bake sale or fundraiser",
      href: "#",
    },
    {
      title: "MSF Grant Application",
      subtitle: "Mamaroneck Schools Foundation",
      href: "https://mamaroneckschoolsfoundation.org/",
    },
    {
      title: "Meeting Minutes Form",
      subtitle: "Report minutes from your clubs meeting",
      href: "#",
    },
    {
      title: "Student Council Constitution and Bylaws",
      subtitle: "Bylaws of MHS Student Council",
      href: "#",
    },
  ],
};

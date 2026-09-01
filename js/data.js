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
      date: "2026-10-07",
      title: "Student Club Fair",
      description: "Held at lunch. Mark your calendars!",
    },
    {
      date: "2026-09-02",
      title: "First day of school! Freshman orientation",
      description: "Student Council will be helping out with some first day and orientation activities.",
    },
    {
      date: "2026-09-03",
      time: "6:00 PM",
      title: "Football Game (Theme TBD)",
      location: "Home",
      description: "Mamaroneck vs. Somers.",
    },
    {
      date: "2026-09-25",
      time: "6:00 PM",
      title: "Football Game (Theme TBD)",
      location: "Home",
      description: "Mamaroneck vs. Scarsdale.",
    },
    {
      date: "2026-10-02",
      time: "6:00 PM",
      title: "Football Game (Theme TBD)",
      location: "Home",
      description: "Mamaroneck vs. North Rockland.",
    },
    {
      date: "2026-10-09",
      time: "6:00 PM",
      title: "Football Game (Theme TBD)",
      location: "Home",
      description: "Mamaroneck vs. New Rochelle.",
    },
    {
      date: "2026-10-24",
      time: "1:30 PM",
      title: "Football Game (Theme TBD)",
      location: "Home",
      description: "Mamaroneck vs. Suffern.",
    },
  ],

  officers: {
    exec: {
      label: "Executive Board",
      members: [
        { name: "William Cohen", role: "President", photo: "assets/img/officers/william-cohen-3.jpg", years: 2, bio: "This is my second year on Student Council. Last year, I served as Vice President of the Executive Board and Head of Communications, where I led The Week Ahead and ran MHS's social media. Outside of Student Council, I'm going into my fourth year on the golf team, which I captain. I'm also the founder of Mamaroneck Student Capital, an extension of our investment club that gives students the chance to invest real money on behalf of the school. Separately, I run Finding FairWays, a golf mentorship program that connects and grows the game through partnerships between our high schoolers and local middle schoolers. I'm beyond excited to serve as President this year." },
        { name: "Owen Riter", role: "Vice President", photo: "assets/img/officers/owen-riter.jpg", years: 3, bio: "This is my third year on Student Council. Last year, I served as Vice President of the Executive Board, and the year before, I was a Sophomore Class Representative. Outside of Student Council, I have played three years of football here at MHS and four years of baseball, serving as team captain for the upcoming baseball season. I am also proud to be President of the Be a Friend Club, where we partner with the Transition Academy to promote inclusion and awareness for an amazing group of students. I look forward to serving our school community for another great year!" },
        { name: "Greta Weiland", role: "Vice President", photo: "assets/img/officers/greta-weiland.jpg", years: 4, bio: "I'm happy to serve in my fourth year on the Student Council. Over the past three years, I have served on the class council as Representative (11), President (10), and Vice President (9). I have enjoyed creating memorable experiences that help students connect, including the three car wash fundraisers I brought to our school, which raised about $3,000 for junior prom. I also organized events with outside companies like Kona Ice and managed our class social media to boost student engagement. In addition to Student Council, I run Central Reading Buddies, a mentorship club I founded that connects MHS students with elementary school students through weekly reading sessions. In the fall and spring, I'm a third-year crew member for the Varsity Sailing team at MHS. I'm thrilled to serve as Vice President on the Executive Council this year!" },
        { name: "Olivia Perez", role: "Vice President", photo: "assets/img/officers/olivia-perez.jpg", years: 3, bio: "I am super excited to be one of MHS's Executive Vice Presidents this year! Last year, I served as Vice President of the Class of '28, supporting our grade and bringing school spirit to every event. In addition to Student Council, I will be a member of MHS Info and will continue with our Video Program as well as PACE. Outside of school, I am an intern with LMC Media, audition for film and TV, and train for climbing competitions. I am looking forward to another fun and memorable year with you all!" },
        { name: "Nina Patnode", role: "Vice President", photo: "assets/img/officers/nina-patnode.jpg", years: 3, bio: "I am so excited to be an Exec VP this year! This is my third year on Student Council. For the last two years, I have been my grade's class president and I am very excited to be an Exec VP this year! At MHS I am very involved in PACE and Orchestra, where I am a member of various performing groups. I am also the secretary of Model UN. Outside of school I like to bake, read, and spend time outdoors. I can't wait to have a great school year!" },
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
          { name: "Cleo Ingalls", role: "Class Representative", photo: "assets/img/officers/cleo-ingalls.jpg", years: 4, bio: "For the past two years, I have had the pleasure of serving as class representative. This will be my third year on Student Council and I am very excited! In addition to Student Council, I am the captain of the cross country team and a member of the track and field team, where I run long distance and throw javelin, shot put, and discus. Additionally, I am the president of MHS's Jewish Student Union, Midnight Run club, and badminton group, as well as a member of the yearbook committee. Outside of school, I am a member of the Larchmont Public Library's teen leadership board. In my free time, I love to run, spend time outdoors, and hang out with friends." },
          { name: "Garrett Clarke", role: "Class Representative", photo: "assets/img/officers/garrett-clarke.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Sadie Bilik", role: "Class Representative", photo: "assets/img/officers/sadie-bilik.jpg", years: 4, bio: "4 years on Student Council" },
        ],
      },
      {
        label: "Class of 2028",
        members: [
          { name: "Sonya Prozes", role: "President", photo: "assets/img/officers/sonya-prozes.jpg", years: 3, bio: "Hi everyone! With two years under my belt, I can't wait to start my third year on Student Council as the Junior Class President. Over the years, I've organized events like the Staff Basketball Game in 2025, many lunchtime Tiger Fives competitions, and have helped countless others run smoothly. Outside of Student Council, I play on the Girls Varsity Basketball team and got the chance to play Unified Basketball last spring. I am so excited to continue planning fun events for the MHS community to engage in. Looking forward to a great year!" },
          { name: "Maya Schein", role: "Vice President", photo: "assets/img/officers/maya-schein.jpg", years: 2, bio: "2 years on Student Council" },
          { name: "Augustas Rastenis", role: "Treasurer", photo: "assets/img/officers/augustas-rastenis.jpg", years: 2, bio: "This will be my second year on Student Council, and I am so glad to have the opportunity to help MHS as the Class of 2028's treasurer. I look forward to being able to make great events like Battle of the Classes possible and making this year the best it can be. I am also a part of our school's band, and also in the club Model UN. Outside of school I love to fish and spend time with friends. I hope to do the best I can as treasurer, and I hope everyone enjoys the great school year." },
          { name: "Annabelle Balagot", role: "Class Representative", photo: "assets/img/officers/annabelle-balagot.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Noelle Curry", role: "Class Representative", photo: "assets/img/officers/noelle-curry.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "George Haines", role: "Class Representative", photo: "assets/img/officers/george-haines.jpg", years: 3, bio: "3 years on Student Council" },
          { name: "Madelyn Dunphy", role: "Class Representative", photo: "assets/img/officers/madelyn-dunphy.jpg", years: 1, bio: "1 year on Student Council" },
        ],
      },
      {
        label: "Class of 2029",
        members: [
          { name: "Andrew Daum", role: "President", photo: "assets/img/officers/andrew-daum.jpg", years: 2, bio: "This is my second year on Student Council, and this year I am Sophomore Class President and I'm very excited for the opportunities ahead! Outside of Student Council, I play basketball and golf for the school. I am looking forward to the great things that we have planned for this year!" },
          { name: "Sarina Lee", role: "Vice President", photo: "assets/img/officers/sarina-lee.jpg", years: 2, bio: "This year, I'm serving my second term as Vice President of the Class of '29 Student Council! At MHS, I'm a part of the Music Department, and I play Viola in our Symphony Orchestra and Chamber Ensemble, and take part in our Tri M Music Honors Society and String Buddies Club. I founded the MHS Desk Concerts Club, which showcases groups of student musicians, and this year, I started the Healing with Harmony program, and plan to coordinate and perform concerts for nursing homes across the country. I'm also a member of Philosophy Club, Model UN, and the mascot of Mamaroneck Debate. In my free time, I love listening to music and spending time with my friends and family. I'm looking forward to another year helping our community at MHS and beyond!" },
          { name: "Michal Vaculin", role: "Treasurer", photo: "assets/img/officers/michal-vaculin.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Sloane Irwin", role: "Class Representative", photo: "assets/img/officers/sloane-irwin.jpg", years: 2, bio: "I am so excited to serve as a Sophomore Class Representative this year! This is my second year on Student Council and last year I was my class vice president. At MHS, I play on the girls varsity lacrosse team and played on the JV soccer team last year. Outside of school, I love to read and spend time with my friends and family. I am looking forward to more fun events and fundraisers throughout the year and I can't wait for another great year on Student Council!" },
          { name: "Jeevan Gupta", role: "Class Representative", photo: "assets/img/officers/jeevan-gupta.jpg", years: 1, bio: "1 year on Student Council" },
          { name: "Matthew Bernhardt", role: "Class Representative", photo: "assets/img/officers/matthew-bernhardt.jpg", years: 1, bio: "I'm a first-year Student Council member, serving as a Class of 2029 Representative, and I'm super excited to be part of it! I play basketball for the school and want to help make our school a fun and better place for everyone. Looking forward to a great year!" },
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

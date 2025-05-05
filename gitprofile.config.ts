// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'grodrigues-1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['grodrigues-1/genome-assembly-final', 'grodrigues-1/microbiome-section-report'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Ecology Presentation',
          description:
            'Saving Abies Religiosas for the Monarch Butterflies',
          imageUrl:
            'https://github.com/grodrigues-1/grodrigues-1.github.io/raw/main/ecologypres.png',
          link: 'https://github.com/grodrigues-1/grodrigues-1.github.io/blob/main/Ecology%20Presentation.pdf',
        },
        {
          title: 'Organic Chemistry Presentation',
          description:
            'Discovering Unknown Dipeptides',
          imageUrl:
            'https://github.com/grodrigues-1/grodrigues-1.github.io/raw/main/ochempres.png',
          link: 'https://github.com/grodrigues-1/grodrigues-1.github.io/raw/main/Ochem%202%20pres.pptx.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Grace Rodrigues Website',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'grace-rodrigues-653b8b202',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://grodrigues-1.github.io/',
    phone: '209-988-2903',
    email: 'grace.m@rodriguesfam.com',
  },
  resume: {
    fileUrl:
      'https://github.com/grodrigues-1/grodrigues-1.github.io/raw/main/DemoCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Microbiology',
    'Chemistry',
    'First Aid',
    'CPR',
  ],
  experiences: [
    {
      company: 'The Haven at Bethany Home',
      position: 'Caregiver',
      from: 'November 2022',
      to: 'June 2023',
      companyLink: '',
    },
    {
      company: 'The Haven at Bethany Home',
      position: 'Medical Technician',
      from: 'June 2023',
      to: 'February 2024',
      companyLink: '',
    },
    {
      company: 'AA Foot and Ankle Care',
      position: 'Medical Assistant',
      from: 'July 2024',
      to: 'August 2024',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'BS in Biological Sciences',
      from: '2021',
      to: '2026',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence Chryseobacterium treverense Isolated from Human Clinical Sources',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Analisa Coppens, Isabella Fregoso, Rachel Haakma, Kimberly Habon, Grace Rodrigues, Tricia Van Laar',
      link: 'https://example.com',
      description:
        'This is a manuscript in submission, where we reported the draft genome sequence of Chryseobacterium treverense, isolated from human clinical sources.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

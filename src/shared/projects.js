// data for all projects
// this includes featured and archived projects
export const PROJECTS = [
  {
    id: 0,
    name: 'Price Checker App',
    date: '2018',
    company: 'Gift N Party',
    description: 'An Android application that identifies products within a DBF inventory and returns the price. Made to improve points of service for small businesses.',
    urls: [
      {
        label: 'Github',
        icon: 'bi-github',
        href: 'https://github.com/ktddaeng/dbfpricecheck'
      }
    ],
    discipline: 'webmob',
    skills: ['Android', 'Java'],
    featured: true,
    image: ''
  },
  {
    id: 1,
    name: 'Personal Website',
    date: '2021',
    company: 'Personal Project',
    description: 'An online resume and portfolio website for myself.',
    urls: [
      {
        label: 'Github',
        icon: 'bi-github',
        href: 'https://github.com/ktddaeng/ktddaeng.github.io'
      },
      {
        label: 'Demo',
        icon: 'bi-box-arrow-up-right',
        href: 'https://ktddaeng.github.io/'
      }
    ],
    discipline: 'webmob',
    skills: ['React', 'Node.js', 'Bootstrap', 'Sass', 'Figma'],
    featured: false,
    image: ''
  },
  {
    id: 2,
    name: 'Java HTML Parser',
    date: '2018',
    company: 'Gift N Party',
    description: 'A web scraping application parses the HTML of order forms from the carts of wholesale merchandise sites and exports them into a CSV file for easy reading and record-keeping.',
    urls: [
      {
        label: 'Github',
        icon: 'bi-github',
        href: 'https://github.com/ktddaeng/javahtmlparser'
      }
    ],
    discipline: 'soft',
    skills: ['Java'],
    featured: true,
    image: ''
  },
  {
    id: 3,
    name: 'Beyond the Scene: We Are Bulletproof',
    date: '2018',
    company: 'Personal Project',
    description: 'A video essay series highlighting the background and past hardships of each member of BTS. Intended to be an introduction to BTS for new fans.',
    urls: [
      {
        label: 'YouTube',
        icon: 'bi-play-btn',
        href: 'https://www.youtube.com/playlist?list=PLlUCISPLKaSmS6Oafbaku_9KMWV0tb8kB'
      }
    ],
    discipline: 'media',
    skills: ['Premiere Pro', 'Photoshop', 'Audition'],
    featured: false,
    image: ''
  }
];

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
} from "../assets";


export const navigation = [
    {
        id: "0",
        title: "Home",
        url: "#Home"
    },

    {
        id: "1",
        title: "About",
        url: "#About"
    },

    {
        id: "2",
        title: "Events And Schedules",
        url: "#Events"
    },

    {
        id: "3",
        title: "Our Speakers and Sponsors",
        url: "#Speakers"
    },

    {
        id: "4",
        title: "Contact Us",
        url: "#Contact"
    },    
    
    {
        id: "5",
        title: "Sign Up",
        url: "#signUp",
        mobile: true
    },

    {
        id: "6",
        title: "Sign In",
        url: "#signIn",
        mobile: true
    },
]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];


export const flagship = [
  {
    id: "0",
    title: "HackerSpace 1.0: Capture the Flag",
    text: "HackerSpace is BrainWave's flagship CTF event focused on cybersecurity and bug bounty hunting!",
    backgroundUrl: card1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "HackLLM",
    text: "If you're interested in LLM's, HackLLM is the space for you. 24 hours non-stop LLM Hackathon",
    backgroundUrl: card2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "CompetitiveCoder",
    text: "Looking for a place to improve your DSA skills and compete on a large scale, the CompetitiveCoder is for you. A CP competition where the winner, takes all",
    backgroundUrl: card3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "CVHack",
    text: "Create computer vision solutions within 24 Hours.",
    backgroundUrl: card4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "CozmoClench",
    text: "A robotics competition where teams build manually controlled robots to grip, carry and deposit objects, while navigating ramps, pits, bridges and control-specific zones",
    backgroundUrl: card5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "MeshMerize",
    text: "MeshMerize is a line following maze-solving robotics competion where teams build autonomous bots that track directions, map the maze in a dry run, and then traverse it via the shortest path in the actual run",
    backgroundUrl: card6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Prasanna Ballal Portfolio',
  description: "Prasanna Ballal Portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Prasanna Ballal.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Berlin based <strong className="text-stone-100">Senior Software Engineer</strong>, currently working
        for <strong className="text-stone-100">Automotive Domains</strong> helping build a modern, <br></br> e-mobility platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me reading about <strong className="text-stone-100">Stock Market</strong>, <strong className="text-stone-100">History</strong>, <strong className="text-stone-100">Ayurveda</strong> or exploring{' '}
        <strong className="text-stone-100">Berlin</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1IQETKr6SjMETS8Wltkbsqq9SIjYoH-zz/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Seasoned software engineer with 9+ years of experience. Proficient in the backend technologies with past experience in front-end and mobile technology.`,
  aboutItems: [
    {label: 'Location', text: 'Berlin, Germany', Icon: MapIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Stocks & Financial Markets, Ayurveda, History, Spirituality', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Pune', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CARIAD, SE.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Marathi',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  },
  {
    name: 'Development Skills',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Spring Boot',
        level: 8,
      },
      {
        name: 'REST',
        level: 8,
      },
      {
        name: 'GIT',
        level: 8,
      },
      {
        name: 'Azure',
        level: 6,
      },
      {
        name: 'CI/CD',
        level: 6,
      },
      {
        name: 'Pair Programming',
        level: 8,
      }
    ],
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2013',
    location: 'MES\'S IMCC, University Of Pune',
    title: 'Master Of Computer Applications',
    content: <p>I completed my Masters in Computer Applications from University Of Pune with First Class.</p>,
  },
  {
    date: 'June 2010',
    location: 'MIT Pune, University Of Pune',
    title: 'Bachelor Of Computer Science',
    content: <p>I completed my Bachelor Of Computer Science from University Of Pune with First Class.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2019 - Present',
    location: 'CARIAD SE, Berlin, Germany',
    title: 'Senior Software Engineer',
    content: (
      <p>
        <span>&#8226;</span> Develop a service platform that will seamlessly connect legacy systems and the latest customer-facing apps for <b> car as a software product</b>.<br></br>
        <span>&#8226;</span> Act as an <b>Anchor</b> for the team to define the tasks in weekly sprint planning and backlog refinement.<br></br>
        <span>&#8226;</span> As an <b>Anchor</b> for team, with PO participate in PI meeting SAFe(Scaled Agile Framework) along with other teams to decide the features to be developed in the next 12 weeks.
        Technology stack we are using is <b>Java 11</b> with <b>Spring Boot</b> and <b>Azure</b> .
      </p>
    ),
  },
  {
    date: 'July 2017 - April 2019',
    location: 'Deutsche Bank, Pune, India',
    title: 'Senior Analyst',
    content: (
      <p >
        <span>&#8226;</span> Develop a mobile app using React Native for internal job postings available globally in Deutsche Bank Group.<br></br>
        <span>&#8226;</span> Complete ownership for the technical development of the mobile app.<br></br>
        <span>&#8226;</span> Closely communicate with stakeholders and transform business requirements into technical solutions.<br></br>

      </p>
    ),
  },
  {
    date: 'July 2016 - July 2017',
    location: 'Tech Mahindra, Pune, India',
    title: 'Senior Software Engineer',
    content: (
      <p>
        <span>&#8226;</span> Complete ownership to migrate the legacy Cordova mobile app to the native iOS App.<br></br>
        <span>&#8226;</span> Work with UX Designer for designing new UI for iOS Native apps.<br></br>
        <span>&#8226;</span> Overcome the performance issues of the app by developing better solutions using native iOS App Development.<br></br>
      </p>
    ),
  },
  {
    date: 'May 2014 - June 2016',
    location: 'Globant India(Formerly Clarice Technologies), Pune, India',
    title: 'Software Engineer',
    content: (
      <p>
        <span>&#8226;</span> Develop iOS app with provided UX designs.<br></br>
        <span>&#8226;</span> Worked on development of variety of apps from different domain like Home Automation, Finance, Real Time Coaching.<br></br>
        <span>&#8226;</span> Worked on some POC's for new products using Swift programming language and React JS.<br></br>
      </p>
    ),
  },
  {
    date: 'May 2013 - May 2014',
    location: 'Omniscient Software, Pune, India',
    title: 'Associate Solutions Engineer',
    content: (
      <p>
        <span>&#8226;</span> Develop parsers and transformations for Financial aggregator web application. <br></br>
        <span>&#8226;</span> Write parsers in Java to read bank statements from CSV, Excel, PDF files. Parsers to read from Email  Address or FTP server. Parsers to read SWIFT statements.<br></br>
        <span>&#8226;</span> Deploy application on UAT environment and application walkthrough to users and support.<br></br>
      </p>
    ),
  },
  {
    date: 'Dec 2012 - May 2013',
    location: 'Omniscient Software, Pune, India',
    title: 'Intern',
    content: (
      <p>
        <span>&#8226;</span> Training on Sencha JS framework.<br></br>
        <span>&#8226;</span> Develop Dashboard for network monitoring system using Sencha JS.<br></br>
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: '24prasannaballal@gmail.com',
      href: 'mailto:24prasannaballal@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Berlin, Germany',
      href: 'https://goo.gl/maps/UUfDWrqcPHMkaBot9',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Prasanna Ballal',
      href: 'https://www.linkedin.com/in/prasannaballal/',
    },
    {
      type: ContactType.Github,
      text: 'prasannaballal',
      href: 'https://github.com/prasannaballal',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/prasannaballal'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/prasannaballal/'}
];

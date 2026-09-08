export const SUMMARY_SECTION_LABEL = 'Summary';

export type SummaryItem = {
  id: string;
  label: string;
  description: string;
  imageSrc?: string;
};

export const SUMMARY_INTRO = {
  greeting: "Hi, I'm",
  name: 'Karol Wichmann',
  description:
    'I write code, create products, run teams, watch stars, and sometimes create some music.',
};

export const SUMMARY_ITEMS: SummaryItem[] = [
  {
    id: 'TIS',
    label: 'At TIS, I develop next-generation Cash Forecasting platform',
    imageSrc: '/tis-logo.png',
    description:
      'Working on a large-scale Cash Forecasting platform, building data-intensive web applications. Built real-time data handling features, ensuring seamless synchronization between user input and multiple data sources',
  },
  {
    id: 'PwC-fe',
    label: 'I was a Senior Associate at PwC, helping fight financial crimes',
    imageSrc: '/pwc-logo.svg',
    description:
      'An overview of the technologies, practices, and ways of working I use to turn ideas into useful products. This section will grow with the tools and disciplines that shape my work.',
  },
  {
    id: 'PwC-da',
    label: 'My IT career in Data Analysis, where I learned how to work with large datasets',
    imageSrc: '/pwc-logo-old.png',
    description:
      'Built reports and dashboards using Tableau, Power BI, Excel, SQL, and MS Access. Obtained a strong foundation in data analysis, visualization, and reporting, which has been invaluable in my career as a front-end developer.',
  },
  {
    id: 'Side Projects',
    label: 'In my free time, I explore new technologies and build things that interest me',
    imageSrc: '/side-projects.gif',
    description:
      'The best ways to get in touch about a project, collaboration, or conversation. Contact details and relevant links will be added here.',
  },
];

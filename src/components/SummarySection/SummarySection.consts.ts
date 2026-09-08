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
      'I work on a large-scale Cash Forecasting platform that helps businesses make better decisions with complex financial data. As a front-end developer, I build data-intensive web applications and intuitive interfaces for demanding workflows. I also develop real-time features that keep user input synchronized with multiple data sources.',
  },
  {
    id: 'PwC-fe',
    label: 'I was a Senior Associate at PwC, helping fight financial crimes',
    imageSrc: '/pwc-logo.svg',
    description:
      'I worked on a KYC and AML platform as a front-end developer, helping create a state-of-the-art application for combating money laundering. I turned complex compliance workflows and financial data into clear, reliable user experiences. The work combined product thinking, modern web technologies, and a strong focus on accuracy.',
  },
  {
    id: 'PwC-da',
    label: 'My IT career in Data Analysis, where I learned how to work with large datasets',
    imageSrc: '/pwc-logo-old.png',
    description:
      'I built reports and dashboards using Tableau, Power BI, Excel, SQL, and MS Access. This experience taught me how to work with large datasets and communicate insights through thoughtful visualizations. It gave me a strong analytical foundation that continues to shape my work as a front-end developer.',
  },
  {
    id: 'Side Projects',
    label: 'In my free time, I explore new technologies and build things that interest me',
    imageSrc: '/side-projects.gif',
    description:
      'I enjoy building a Lua-based game, a financial dashboard with Next.js, and an astronomy blog. These projects let me explore different technologies, ideas, and ways of solving problems outside my day-to-day work. They are also a space for experimenting, learning, and following my curiosity.',
  },
];

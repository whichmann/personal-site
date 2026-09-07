export type SummaryItem = {
  id: string;
  label: string;
  description: string;
  imageSrc?: string;
};

export const summaryItems: SummaryItem[] = [
  {
    id: 'TIS',
    label: 'I am a front-end developer at Treasury Intelligence Solutions, creating next-generation Cash Forecasting platform',
    imageSrc: '/tis-logo.png',  
    description:
      'Worked on a large-scale Cash Forecasting platform, building data-intensive web applications. Built real-time data handling features, ensuring seamless synchronization between user input and multiple data sources',
  },
  {
    id: 'PwC',
    label: 'I was a Senior Associate at PwC Poland, working on complex platform, helping fight financial crime and money laundering',
    imageSrc: '/pwc-logo.svg',
    description:
      'An overview of the technologies, practices, and ways of working I use to turn ideas into useful products. This section will grow with the tools and disciplines that shape my work.',
  },
  {
    id: 'PwC',
    label: 'I started my career in IT as a Data Analyst, where I learned how to create meaningful reports and dashboards, and how to work with large datasets',
    imageSrc: '/pwc-logo-old.png',
    description:
      'Built reports and dashboards using Tableau, Power BI, Excel, SQL, and MS Access. Obtained a strong foundation in data analysis, visualization, and reporting, which has been invaluable in my career as a front-end developer.',
  },
  {
    id: 'Side Projects',
    label: 'I do side projects in my free time, exploring new technologies and building things that interest me',
    imageSrc: '/side-projects.gif',
    description:
      'The best ways to get in touch about a project, collaboration, or conversation. Contact details and relevant links will be added here.',
  },
];

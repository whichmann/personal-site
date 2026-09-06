export type SummaryItem = {
  id: string;
  label: string;
  description: string;
};

export const summaryItems: SummaryItem[] = [
  {
    id: 'experience',
    label: 'Experience',
    description:
      'A closer look at the products I have helped shape, the teams I have worked with, and the problems I have enjoyed solving. More details about my roles and projects will live here.',
  },
  {
    id: 'skills',
    label: 'Skills',
    description:
      'An overview of the technologies, practices, and ways of working I use to turn ideas into useful products. This section will grow with the tools and disciplines that shape my work.',
  },
  {
    id: 'hobbies',
    label: 'Hobbies',
    description:
      'A small collection of the things I return to outside work, from watching stars to making music. These interests often give me new ways to think, notice, and create.',
  },
  {
    id: 'contact',
    label: 'Contact',
    description:
      'The best ways to get in touch about a project, collaboration, or conversation. Contact details and relevant links will be added here.',
  },
];

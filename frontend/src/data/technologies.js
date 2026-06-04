// Used by Portfolio/TechnologyExpertise section.
// `color` maps to CSS modifier classes in TechnologyExpertise.module.scss.

export const techCategories = [
  {
    label: 'Frontend',
    color: 'primary',
    techs: [
      { name: 'React',      level: 'Expert' },
      { name: 'Next.js',    level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Angular',    level: 'Advanced' },
      { name: 'Vue.js',     level: 'Advanced' },
      { name: 'Tailwind',   level: 'Expert' },
    ],
  },
  {
    label: 'Backend',
    color: 'secondary',
    techs: [
      { name: 'Django',     level: 'Expert' },
      { name: 'FastAPI',    level: 'Expert' },
      { name: 'Node.js',    level: 'Expert' },
      { name: 'GraphQL',    level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Expert' },
      { name: 'Redis',      level: 'Advanced' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    color: 'neutral',
    techs: [
      { name: 'AWS',        level: 'Expert' },
      { name: 'Azure',      level: 'Advanced' },
      { name: 'GCP',        level: 'Advanced' },
      { name: 'Kubernetes', level: 'Expert' },
      { name: 'Terraform',  level: 'Expert' },
      { name: 'Docker',     level: 'Expert' },
    ],
  },
  {
    label: 'AI & Data',
    color: 'accent',
    techs: [
      { name: 'OpenAI API',   level: 'Expert' },
      { name: 'Claude API',   level: 'Expert' },
      { name: 'LangChain',    level: 'Advanced' },
      { name: 'PyTorch',      level: 'Advanced' },
      { name: 'Apache Spark', level: 'Advanced' },
      { name: 'dbt',          level: 'Expert' },
    ],
  },
];

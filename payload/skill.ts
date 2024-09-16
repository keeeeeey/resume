import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Spring',
    },
    {
      title: 'Spring Boot',
    },
    {
      title: 'Spring MVC',
    },
    {
      title: 'Spring Batch',
    },
    {
      title: 'Spring Security',
    },
    {
      title: 'Spring Data JPA',
    },
    {
      title: 'Querydsl',
    },
    {
      title: 'Hibernate',
    },
    {
      title: 'MyBatis',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'nginx',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Kafka',
    },
    {
      title: 'Docker',
    },
    {
      title: 'MySQL',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Tools & IDES',
  items: [
    {
      title: 'IntelliJ',
    },
    {
      title: "Eclipse",
    },
    {
      title: 'Git',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Gradle',
    },
    {
      title: 'Maven',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;

/**
 * Central portfolio data — generated from Jasmini Jena's resume.
 * Every factual claim on the site should come from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Jasmini Jena',
  displayName: 'Jasmini Jena',
  firstName: 'JASMINI',
  seriesTag: 'THE SERIES',
  originalLabel: 'A JASMINI ORIGINAL',
  role: 'AWS DevOps Engineer',
  tagline: ['AWS DevOps Engineer', 'Cloud Migration', 'Agentic Automation'],
  intro:
    'AWS DevOps Engineer with 5+ years of experience designing, automating, deploying and supporting scalable cloud infrastructure and production platforms across AWS, Terraform, Kubernetes, CI/CD and AI-assisted DevOps.',
  location: 'Hyderabad, Telangana',
  phone: '7064220366',
  email: 'jasminjena97@gmail.com',
  experienceYears: '5+',
  links: {
    linkedin: 'https://www.linkedin.com/in/jasmini-jena',
  },
  resumePdf: '/assets/Jasmini_Jena_Resume.pdf',
  portrait: {
    src: '/assets/portrait-1100.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Jasmini Jena',
  },
  interests: ['Cloud Migration', 'Platform Engineering', 'AI-Assisted DevOps'],
};

export const education = [
  {
    school: 'Biju Patnaik University of Technology',
    place: 'Odisha',
    degree: 'B.Tech — Electronics and Telecommunication Engineering',
    period: '2020',
  },
];

export const experience = [
  {
    company: 'EPAM Systems',
    role: 'DevOps Engineer',
    place: 'Hyderabad, India',
    period: 'January 2026 – Present',
    points: [
      'Built an automated Azure-to-AWS and VMware-to-AWS migration engine using GitHub Actions, AWS Step Functions, Lambda, EventBridge, DynamoDB and AWS MGN.',
      'Provisioned migration infrastructure with Terraform, including IAM, DynamoDB, EventBridge, Lambda and Step Functions.',
      'Designed automated migration runbooks covering source preparation, MGN agent installation, replication, validation, cutover, post-migration verification and rollback.',
      'Automated source VM preparation and AWS MGN agent installation using PowerShell and Bash through Azure Run Command, WinRM, SSH and AWS Systems Manager.',
      'Implemented Step Functions orchestration for sequential migration execution, readiness checks, reboot handling, validation and SSM-based post-migration operations.',
      'Built Lambda-based validation and execution workflows using Python, DynamoDB and CloudWatch for migration status tracking and failure handling.',
      'Designed East-West and Firewall-19 connectivity requirements by analyzing application flows, IPs, subnet CIDRs, ports, protocols and network paths.',
      'Created migration architecture and operational documentation covering SIG, target AWS architecture, methodology, validation, cutover, rollback and hypercare.',
      'Worked on enterprise cloud migration automation with focus on repeatability, idempotency, production reliability and operational visibility.',
      'Architected an AI-driven CI/CD modernization platform using Model Context Protocol and specialized AI agents to analyze Jenkinsfiles and automate migration to GitHub Actions and GitLab CI.',
      'Implemented agent-driven analysis, validation and remediation workflows to identify CI/CD migration blockers before code changes are committed.',
    ],
  },
  {
    company: 'Zen3 IT Solutions',
    role: 'DevOps Engineer',
    place: 'India',
    period: 'April 2024 – January 2026',
    points: [
      'Designed and maintained CI/CD pipelines for Dev, UAT and Production environments using Jenkins and Bitbucket Pipelines.',
      'Built and deployed containerized applications using Docker, with images stored in Amazon ECR.',
      'Deployed and operated production workloads on Amazon EKS with Kubernetes-based orchestration, scaling and fault-tolerant deployments.',
      'Configured Apache Kafka brokers behind Network Load Balancers for high-throughput data ingestion from external providers.',
      'Integrated Logstash and Elasticsearch for data processing, indexing and application data retrieval.',
      'Implemented secure runtime secret retrieval using AWS Secrets Manager for payment-related application components.',
      'Deployed production observability using Site24x7 and Datadog, contributing to 99.9% application uptime.',
      'Performed AWS infrastructure optimization and instance rightsizing, achieving approximately 10–15% AWS cost reduction.',
      'Troubleshot production infrastructure, application, networking, deployment and Kubernetes issues and performed root cause analysis.',
      'Managed Linux environments, Docker workloads, CI/CD pipelines and AWS cloud infrastructure across multiple environments.',
    ],
  },
  {
    company: 'Cigniti Technologies',
    role: 'DevOps Engineer',
    place: 'India',
    period: 'March 2022 – September 2023',
    points: [
      'Containerized microservices using Docker and deployed workloads on Amazon ECS and Amazon EKS.',
      'Designed and implemented Kubernetes observability using Istio, Prometheus and Grafana.',
      'Automated application deployments using Jenkins, GitHub Actions and AWS CodeDeploy.',
      'Managed Amazon Route 53 configurations for latency-based and failover routing.',
      'Administered Linux and Windows Server environments and application/web servers including Apache, NGINX and IIS.',
      'Integrated Jira and Bitbucket to streamline source-code management and issue-tracking workflows.',
      'Supported production deployments, troubleshooting, infrastructure monitoring and operational activities across cloud environments.',
    ],
  },
  {
    company: 'Amazon',
    role: 'DevOps Intern',
    place: 'India',
    period: 'August 2021 – March 2022',
    points: [
      'Automated AWS infrastructure deployment using AWS CloudFormation and AWS CLI.',
      'Designed EC2-based architectures with focus on high availability, security and operational reliability.',
      'Developed and deployed AWS Lambda functions for cloud automation.',
      'Built monitoring dashboards using Prometheus and Grafana.',
      'Conducted technical knowledge-sharing and mentoring sessions for team members.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'dynamic-teletex',
    title: 'Dynamic Teletex',
    year: 'AWS Platform',
    genre: 'Travel • Cloud • Microservices',
    logline: 'A scalable AWS-based travel and booking platform powered by containerized microservices and real-time data pipelines.',
    stack: ['AWS EKS', 'Docker', 'Kafka', 'Elasticsearch', 'RabbitMQ'],
    build: [
      'Developed and supported a scalable travel and booking platform using Amazon EKS and Docker-based microservices.',
      'Built Kafka-based real-time data pipelines behind an NLB for ingestion from external hotel and flight providers.',
      'Configured Logstash to process application and provider data and integrate with Elasticsearch for structured search and retrieval.',
      'Implemented RabbitMQ for inter-service asynchronous communication and Strapi CMS for dynamic content management.',
      'Integrated AWS Secrets Manager to securely retrieve and decrypt sensitive payment-related information at runtime.',
      'Automated application delivery using Bitbucket Pipelines through a build → ECR → EKS deployment workflow.',
      'Implemented zero-downtime deployment practices, global delivery with CloudFront, Route 53 and Cloudflare, and monitoring with Site24x7.',
    ],
    features: [
      'AWS EKS microservices platform',
      'Kafka ingestion behind an NLB',
      'Logstash and Elasticsearch search pipeline',
      'RabbitMQ asynchronous communication',
      'Bitbucket Pipelines to ECR to EKS delivery',
      'Zero-downtime deployments',
    ],
    metrics: [
      { value: '99.9%', label: 'application uptime' },
      { value: 'EKS', label: 'production orchestration' },
      { value: 'Kafka', label: 'real-time ingestion' },
      { value: '10–15%', label: 'AWS cost reduction' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  { id: 'experience', title: '5+ Years', org: 'AWS DevOps', detail: 'Designing, automating, deploying and supporting scalable cloud infrastructure and production platforms.', laurel: 'Experience' },
  { id: 'migration-engine', title: 'Migration Engine', org: 'Azure → AWS', detail: 'Automated enterprise VM migration workflows with AWS MGN, Step Functions, Lambda, EventBridge and DynamoDB.', laurel: 'Cloud Migration' },
  { id: 'uptime', title: '99.9% Uptime', org: 'Production Platforms', detail: 'Built observability and operational practices with Site24x7, Datadog, CloudWatch, Prometheus and Grafana.', laurel: 'Reliability' },
  { id: 'cost-optimization', title: '10–15% Lower Cost', org: 'AWS Optimization', detail: 'Optimized infrastructure and rightsized instances to reduce cloud spend while supporting production workloads.', laurel: 'Cost Control' },
  { id: 'agentic-devops', title: 'Agentic DevOps', org: 'MCP + AI Agents', detail: 'Architected AI-assisted CI/CD modernization workflows that analyze Jenkinsfiles and surface migration blockers.', laurel: 'AI Automation' },
];

export type Certification = { issuer: string; name: string; detail: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Solutions Architect – Associate', detail: 'Valid 18 March 2026 – 18 March 2029' },
  { issuer: 'Claude', name: 'Claude Certified Architect – Foundations', detail: 'Valid 13 August 2026 – 13 August 2027' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

const skills = (items: string[]): Skill[] => items.map((name) => ({ name, mono: name.slice(0, 2) }));

export const skillCategories: SkillCategory[] = [
  { id: 'cloud', title: 'Cloud & AWS', subtitle: 'Infrastructure and managed services', skills: skills(['AWS', 'EC2', 'EKS', 'ECS', 'S3', 'RDS', 'VPC', 'IAM', 'Route 53', 'CloudFront', 'ECR', 'Lambda', 'Step Functions', 'EventBridge', 'DynamoDB', 'CloudWatch', 'Secrets Manager', 'Systems Manager', 'AWS MGN', 'NLB', 'ALB', 'Auto Scaling', 'AWS CLI']) },
  { id: 'iac', title: 'Infrastructure as Code', subtitle: 'Repeatable cloud foundations', skills: skills(['Terraform', 'AWS CloudFormation']) },
  { id: 'cicd', title: 'CI/CD & DevOps', subtitle: 'Build, release and quality', skills: skills(['Jenkins', 'GitHub Actions', 'Bitbucket Pipelines', 'Git', 'GitHub', 'Docker', 'Maven', 'SonarQube', 'Fortify']) },
  { id: 'containers', title: 'Containers', subtitle: 'Orchestration and packaging', skills: skills(['Kubernetes', 'Amazon EKS', 'Amazon ECS', 'Docker', 'Helm']) },
  { id: 'observability', title: 'Observability', subtitle: 'Signals for production systems', skills: skills(['Prometheus', 'Grafana', 'Site24x7', 'Datadog', 'CloudWatch']) },
  { id: 'migration', title: 'Migration & Automation', subtitle: 'Runbooks and automation', skills: skills(['Azure-to-AWS Migration', 'AWS MGN', 'Migration Factory', 'VM Migration', 'Migration Runbooks', 'PowerShell', 'Bash', 'Python', 'Azure Run Command', 'WinRM', 'SSH']) },
  { id: 'data-networking', title: 'Data & Networking', subtitle: 'Traffic, pipelines and storage', skills: skills(['Apache Kafka', 'Logstash', 'Elasticsearch', 'RabbitMQ', 'PostgreSQL', 'MySQL', 'TCP/IP', 'DNS', 'Firewall Rules', 'OSI Model']) },
  { id: 'ai-platforms', title: 'AI & Platforms', subtitle: 'Modern operations surface', skills: skills(['Linux', 'Ubuntu', 'CentOS', 'Red Hat Enterprise Linux', 'Windows Server', 'Generative AI', 'Prompt Engineering', 'AWS Kiro', 'MCP', 'AI Agents', 'Agentic DevOps Automation', 'Apache', 'NGINX', 'IIS', 'Strapi CMS']) },
];

export const skillEvidence: Record<string, string[]> = {
  AWS: ['AWS Certified Solutions Architect – Associate', 'Dynamic Teletex'],
  Terraform: ['Azure-to-AWS migration engine', 'EPAM Systems'],
  Kubernetes: ['Amazon EKS production workloads', 'Dynamic Teletex'],
  'Amazon EKS': ['Dynamic Teletex', 'Zen3 IT Solutions'],
  Jenkins: ['CI/CD modernization platform', 'Cigniti Technologies'],
  'GitHub Actions': ['Migration engine', 'CI/CD modernization platform'],
  Docker: ['Dynamic Teletex', 'Amazon EKS workloads'],
  Python: ['Lambda validation workflows', 'AWS automation'],
  Bash: ['AWS MGN agent installation', 'Migration runbooks'],
  'AWS MGN': ['Azure-to-AWS migration engine', 'Migration runbooks'],
  'Step Functions': ['Sequential migration orchestration', 'EPAM Systems'],
  'Apache Kafka': ['Dynamic Teletex real-time ingestion'],
  Elasticsearch: ['Dynamic Teletex structured search'],
  RabbitMQ: ['Dynamic Teletex asynchronous communication'],
  Prometheus: ['Kubernetes observability', 'Amazon monitoring dashboards'],
  Grafana: ['Kubernetes observability', 'Amazon monitoring dashboards'],
  'Generative AI': ['AI-driven CI/CD modernization platform'],
  MCP: ['AI-driven CI/CD modernization platform'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020',
    synopsis: 'B.Tech in Electronics and Telecommunication Engineering from Biju Patnaik University of Technology, Odisha.',
    episodes: [{ code: 'S01 E01', title: 'The Engineer', description: 'B.Tech — Electronics and Telecommunication Engineering, BPUT, Odisha.', tags: ['B.Tech', 'BPUT', 'Odisha'], runtime: '2020', palette: violet }],
  },
  {
    number: 2,
    title: 'Cloud Beginnings',
    period: '2021 – 2022',
    synopsis: 'AWS infrastructure, automation and observability begin at Amazon.',
    episodes: [
      { code: 'S02 E01', title: 'The Intern', description: 'Automated AWS infrastructure with CloudFormation and AWS CLI; designed EC2 architectures for high availability and security.', tags: ['AWS', 'CloudFormation', 'EC2'], runtime: 'Aug 2021 – Mar 2022', palette: amber },
      { code: 'S02 E02', title: 'The Automator', description: 'Built Lambda functions and monitoring dashboards with Prometheus and Grafana, while sharing cloud knowledge with team members.', tags: ['Lambda', 'Prometheus', 'Grafana'], runtime: 'Amazon', palette: jade },
    ],
  },
  {
    number: 3,
    title: 'Production Systems',
    period: '2022 – 2026',
    synopsis: 'Containerized applications, Kubernetes operations, CI/CD and production support across Cigniti Technologies and Zen3 IT Solutions.',
    episodes: [
      { code: 'S03 E01', title: 'The Operator', description: 'Containerized microservices, operated ECS and EKS workloads, and implemented Kubernetes observability with Istio, Prometheus and Grafana.', tags: ['Docker', 'ECS', 'EKS'], runtime: 'Mar 2022 – Sep 2023', palette: ocean },
      { code: 'S03 E02', title: 'The Platform Engineer', description: 'Built CI/CD pipelines, Kafka ingestion, Logstash and Elasticsearch integrations, secure secret retrieval and production observability.', tags: ['Jenkins', 'Kafka', 'Datadog'], runtime: 'Apr 2024 – Jan 2026', palette: amber },
    ],
  },
  {
    number: 4,
    title: 'Migration & Agents',
    period: '2026 – Present',
    synopsis: 'Enterprise cloud migration automation and AI-driven CI/CD modernization at EPAM Systems.',
    episodes: [
      { code: 'S04 E01', title: 'The Migration Engine', description: 'Orchestrated Azure-to-AWS and VMware-to-AWS VM migrations with AWS MGN, Step Functions, Lambda, EventBridge and DynamoDB.', tags: ['AWS MGN', 'Step Functions', 'Terraform'], runtime: 'January 2026 – Present', palette: crimson },
      { code: 'S04 E02', title: 'The Agent Architect', description: 'Architected MCP and specialized AI agents to analyze Jenkinsfiles and automate CI/CD modernization to GitHub Actions and GitLab CI.', tags: ['MCP', 'AI Agents', 'CI/CD'], runtime: 'EPAM Systems', palette: violet },
    ],
  },
  {
    number: 5,
    title: 'Dynamic Teletex',
    period: 'Key project',
    synopsis: 'An AWS-based travel and booking platform built for resilient, observable, zero-downtime delivery.',
    episodes: [{ code: 'S05 E01', title: 'The Travel Platform', description: 'Supported EKS and Docker microservices, Kafka data pipelines, Elasticsearch search, RabbitMQ communication, secure runtime secrets and global delivery.', tags: ['EKS', 'Kafka', 'Elasticsearch'], runtime: 'AWS Platform', palette: ocean }],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The headline', title: 'AWS DevOps', detail: '5+ years across cloud, automation and production platforms', palette: crimson },
  { label: 'The migration arc', title: 'Azure → AWS', detail: 'AWS MGN, Step Functions, Lambda and Terraform', palette: ocean },
  { label: 'The production stack', title: 'EKS + Docker', detail: 'Containerized workloads with Kubernetes orchestration', palette: violet },
  { label: 'The key project', title: 'Dynamic Teletex', detail: 'AWS-based travel and booking platform', palette: amber },
  { label: 'The data stream', title: 'Kafka', detail: 'Real-time ingestion behind a Network Load Balancer', palette: jade },
  { label: 'The reliability signal', title: '99.9%', detail: 'Application uptime supported by observability', palette: ocean },
  { label: 'The efficiency win', title: '10–15%', detail: 'AWS cost reduction through optimization and rightsizing', palette: jade },
  { label: 'The agent layer', title: 'MCP + AI', detail: 'CI/CD modernization with specialized AI agents', palette: violet },
  { label: 'The credential', title: 'AWS SAA', detail: 'AWS Certified Solutions Architect – Associate', palette: amber },
  { label: 'The current mission', title: 'Platform Engineering', detail: 'Migration, reliability and agentic automation', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · E&TC', lines: ['Biju Patnaik University of Technology, Odisha', '2020'] },
  { kicker: 'Experience', title: '5+ years in DevOps', lines: ['AWS cloud engineering · CI/CD · Kubernetes', 'Production support · Observability · Cost optimization'], chips: ['AWS', 'Terraform', 'Kubernetes'] },
  {
    kicker: 'Cloud transformation',
    title: 'Cloud Migration, Automated',
    lines: ['Azure + VMware → AWS', 'Repeatable, validated and production-ready migration workflows'],
    chips: ['AWS MGN', 'Step Functions', 'Lambda', 'EventBridge'],
  },
  { kicker: 'Project', title: 'Dynamic Teletex', lines: ['AWS-based travel and booking platform', 'EKS · Kafka · Elasticsearch · RabbitMQ · zero-downtime delivery'] },
  { kicker: 'Modernization', title: 'Agents in the pipeline', lines: ['MCP and specialized AI agents analyze Jenkinsfiles', 'Migration to GitHub Actions and GitLab CI'] },
  { kicker: 'Certified', title: 'Two credentials', lines: ['AWS Certified Solutions Architect – Associate', 'Claude Certified Architect – Foundations'] },
  { kicker: 'Current mission', title: 'Now building', lines: ['Repeatable migration workflows · reliable platforms', 'AI-assisted and agent-driven DevOps automation'] },
];

export type ProfileId = 'jasmini' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'jasmini', name: 'Jasmini', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Resume, experience & certifications first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Platform Engineer', blurb: 'Cloud, migration & delivery first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The story arc & highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Project', meta: `${projects.length} Original • Dynamic Teletex`, palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

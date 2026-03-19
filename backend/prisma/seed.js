const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Seed skills
  const skills = [
    { name: 'React', level: 'Advanced', category: 'Frontend', proficiency: 85 },
    { name: 'JavaScript', level: 'Advanced', category: 'Frontend', proficiency: 90 },
    { name: 'HTML', level: 'Advanced', category: 'Frontend', proficiency: 90 },
    { name: 'CSS', level: 'Advanced', category: 'Frontend', proficiency: 85 },
    { name: 'Node.js', level: 'Advanced', category: 'Backend', proficiency: 85 },
    { name: 'PostgreSQL', level: 'Intermediate', category: 'Backend', proficiency: 75 },
    { name: 'Python', level: 'Advanced', category: 'AI/ML', proficiency: 80 },
    { name: 'C++', level: 'Intermediate', category: 'Backend', proficiency: 70 },
    { name: 'TensorFlow', level: 'Intermediate', category: 'AI/ML', proficiency: 70 },
    { name: 'PyTorch', level: 'Intermediate', category: 'AI/ML', proficiency: 70 },
    { name: 'Docker', level: 'Intermediate', category: 'DevOps', proficiency: 75 }
  ]

  // Insert/update skills - upsert to avoid duplicates
  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {
        level: skill.level,
        category: skill.category,
        proficiency: skill.proficiency
      },
      create: skill
    })
  }

  // Seed projects
  const projects = [
    {
      title: 'Josh Lifestyle Website',
      description: 'Production-grade e-commerce site with reusable React components and modern design patterns.',
      long_description: 'Collaborated to build a comprehensive e-commerce platform featuring product catalog, shopping cart, and checkout flow. Implemented reusable component architecture and modern UI patterns.',
      tech_stack: 'React, JavaScript, HTML, CSS',
      github_url: 'https://github.com/Bipin-km',
      live_url: 'https://josh-lifestyle.com/',
      category: 'Web',
      featured: false,
      date: new Date('2024-01-15')
    },
    {
      title: 'PragyaBin Hackathon Winner',
      description: 'AI-powered smart bin and real-time waste-tracking ecosystem. 1st Place Winner at hackathon.',
      long_description: 'Led the EcoLoop team to build an innovative waste management solution using AI and IoT. Integrated embedded systems with a full-stack web platform for real-time tracking and analytics.',
      tech_stack: 'React, Node.js, Python, TensorFlow',
      github_url: null,
      live_url: null,
      category: 'Hackathon',
      featured: true,
      date: new Date('2024-06-20')
    },
    {
      title: 'Emergency Rescue Platform',
      description: 'Disaster coordination platform streamlining rescue and relief efforts with real-time updates.',
      long_description: 'Built a comprehensive platform for disaster management with real-time communication, resource allocation, and volunteer coordination.',
      tech_stack: 'React, Node.js, PostgreSQL',
      github_url: null,
      live_url: null,
      category: 'Web',
      featured: false,
      date: new Date('2023-11-10')
    },
    {
      title: 'ArthaGyan Financial Literacy',
      description: 'Educational platform helping beginners navigate personal finance with interactive lessons.',
      long_description: 'Designed an intuitive platform for financial education with interactive modules, quizzes, and progress tracking.',
      tech_stack: 'React, Node.js, PostgreSQL',
      github_url: null,
      live_url: null,
      category: 'Web',
      featured: false,
      date: new Date('2024-03-05')
    },
    {
      title: 'GRU Network Optimization (Minor Project)',
      description: 'Applied advanced compression techniques achieving 90% model size reduction with minimal accuracy loss.',
      long_description: 'Implemented Lottery Ticket Hypothesis, attention-based distillation, and quantization-aware training on BiGRU models for sentiment analysis.',
      tech_stack: 'Python, PyTorch, TensorFlow',
      github_url: null,
      live_url: null,
      category: 'AI/ML',
      featured: true,
      date: new Date('2025-02-15')
    }
  ]

  // Insert projects: update existing ones and create new ones
  for (const project of projects) {
    await prisma.project.upsert({
      where: { title: project.title },
      update: {
        description: project.description,
        long_description: project.long_description,
        tech_stack: project.tech_stack,
        github_url: project.github_url,
        live_url: project.live_url,
        category: project.category,
        featured: project.featured,
        date: project.date
      },
      create: project
    })
  }

  // Seed about
  const existingAbout = await prisma.about.findFirst()
  if (!existingAbout) {
    await prisma.about.create({ data: { content: 'I am Bipin Kumar Marasini, a Computer Engineering student and full-stack developer focused on building fast, accessible web applications. My work spans web development, AI research, and competitive hackathons.' } })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

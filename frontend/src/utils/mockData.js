// Mock data - used as fallback when backend is unavailable
export const mockSkills = [
  { id: 1, name: 'React', level: 'Advanced', category: 'Frontend', proficiency: 85 },
  { id: 2, name: 'JavaScript', level: 'Advanced', category: 'Frontend', proficiency: 90 },
  { id: 3, name: 'HTML', level: 'Advanced', category: 'Frontend', proficiency: 90 },
  { id: 4, name: 'CSS', level: 'Advanced', category: 'Frontend', proficiency: 85 },
  { id: 5, name: 'Node.js', level: 'Advanced', category: 'Backend', proficiency: 85 },
  { id: 6, name: 'PostgreSQL', level: 'Intermediate', category: 'Backend', proficiency: 75 },
  { id: 7, name: 'Python', level: 'Advanced', category: 'AI/ML', proficiency: 80 },
  { id: 8, name: 'TensorFlow', level: 'Intermediate', category: 'AI/ML', proficiency: 70 },
  { id: 9, name: 'Docker', level: 'Intermediate', category: 'DevOps', proficiency: 75 },
]

export const mockProjects = [
  {
    id: 1,
    title: 'Josh Lifestyle Website',
    description: 'Production-grade e-commerce site with reusable React components and modern design patterns.',
    tech_stack: 'React, JavaScript, HTML, CSS',
    github_url: 'https://github.com/Bipin-km',
    live_url: 'https://josh-lifestyle.com/',
    category: 'Web',
    featured: false,
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'PragyaBin Hackathon Winner',
    description: 'AI-powered smart bin and real-time waste-tracking ecosystem. 1st Place Winner at hackathon.',
    tech_stack: 'React, Node.js, Python, TensorFlow',
    category: 'Hackathon',
    featured: true,
    date: '2024-06-20'
  },
  {
    id: 3,
    title: 'Emergency Rescue Platform',
    description: 'Disaster coordination platform streamlining rescue and relief efforts with real-time updates.',
    tech_stack: 'React, Node.js, PostgreSQL',
    category: 'Web',
    featured: false,
    date: '2023-11-10'
  },
  {
    id: 4,
    title: 'GRU Network Optimization',
    description: 'Applied advanced compression techniques achieving 90% model size reduction with minimal accuracy loss.',
    tech_stack: 'Python, PyTorch, TensorFlow',
    category: 'AI/ML',
    featured: true,
    date: '2025-02-15'
  }
]

export const mockAbout = {
  content: 'I am a Computer Engineering student and full-stack developer focused on building fast, accessible web applications. My work spans web development, AI research, and competitive hackathons.'
}

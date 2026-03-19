const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
  const projects = [
    {
      title: 'Bigru Sentiment Analysis',
      description: 'BiGRU sentiment analysis with model compression techniques (LTH, KD, QAT).',
      tech_stack: 'Python, PyTorch, TensorFlow',
      github_url: 'https://github.com/Bipin-km/Bigru_Sentiment_Analysis',
      live_url: null
    },
    {
      title: 'Retro Cricket (Pygame)',
      description: '2D cricket game inspired by classic mobile cricket games, built with Pygame.',
      tech_stack: 'Python, Pygame',
      github_url: 'https://github.com/Bipin-km/cricket',
      live_url: null
    }
  ]

  for(const p of projects){
    const existing = await prisma.project.findFirst({ where: { title: p.title } })
    if(existing){
      await prisma.project.update({ where: { id: existing.id }, data: p })
      console.log('Updated', p.title)
    } else {
      await prisma.project.create({ data: p })
      console.log('Created', p.title)
    }
  }
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())

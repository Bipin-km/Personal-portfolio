const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
  // Remove live_url for Josh project and set github to profile if needed
  const title = 'Josh Lifestyle Website (Front-end)'
  const p = await prisma.project.findFirst({ where: { title } })
  if(p){
    await prisma.project.update({ where: { id: p.id }, data: { live_url: null, github_url: 'https://github.com/Bipin-km' } })
    console.log('Updated project', title)
  } else {
    console.log('Project not found:', title)
  }
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect())

// Simple XP/badge persistence using localStorage
const XP_KEY = 'portfolio_xp_v1'
const BADGES_KEY = 'portfolio_badges_v1'

export function getXP(){
  return parseInt(localStorage.getItem(XP_KEY) || '0', 10)
}

export function addXP(n){
  const cur = getXP()
  const next = cur + n
  localStorage.setItem(XP_KEY, String(next))
  return next
}

export function resetXP(){ localStorage.removeItem(XP_KEY); localStorage.removeItem(BADGES_KEY) }

export function getBadges(){
  try{ return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]') }catch(e){return []}
}

export function addBadge(b){
  const badges = getBadges()
  if(!badges.includes(b)){
    badges.push(b)
    localStorage.setItem(BADGES_KEY, JSON.stringify(badges))
    return true
  }
  return false
}

export default { getXP, addXP, getBadges, addBadge, resetXP }

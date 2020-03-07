import { inflictBees } from './bees'
import { inflictDeath } from './grim-reaper'

const DEFAULT_RATE : number = 5

/**
 * Lower numbers for "rate" means more common afflictions. (Sorry!)
 */
const inflict = (victim: string, rate : number = DEFAULT_RATE) : string => {
  const rand : number = Math.floor(Math.random() * 10000) % rate

  switch (rand) {
  case 0: return inflictBees(victim)
  case 1: return inflictDeath(victim)
  default: return victim
  }
}

export { inflict }

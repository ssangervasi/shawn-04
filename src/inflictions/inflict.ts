import { getRandomInt } from './random'
import { inflictBees } from './bees'
import { inflictDeath } from './grim-reaper'

const DEFAULT_RATE : number = 5

/**
 * Lower numbers for "rate" means more common afflictions. (Sorry!)
 */
const inflict = (victim: string, rate : number = DEFAULT_RATE) : string => {
  const rand : number = getRandomInt(1000000) % rate

  switch (rand) {
  case 0: return inflictBees(victim)
  case 1: return inflictDeath(victim)
  default: return victim
  }
}

export { inflict }

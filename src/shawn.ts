import { forget as forgetSpeech, speakProperly } from './helpers/speak-properly'
import { inflictBees } from './inflictions/bees'
import { inflictDeath } from './inflictions/grim-reaper'

const INITIAL_SANITY : number = 30

let sanity : number = INITIAL_SANITY

/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  sanity--
  const goodResult = speakProperly(phrase, pedantic)
  return checkSanity(sanity, goodResult)
}

const checkSanity = (sanity: number, goodResult: string) : string => {
  if (sanity === 0) {
    return 'Help! I\'m trapped in a text conversion factory!'
  }

  if (sanity < 0) {
    const rand : number = Math.floor(Math.random() * 10000) % 5

    switch (rand) {
    case 0: return inflictBees(goodResult)
    case 1: return inflictDeath(goodResult)
    default:
    }
  }

  return goodResult
}

const forget = () => {
  sanity = INITIAL_SANITY
  forgetSpeech()
}

export { forget, rephrase }

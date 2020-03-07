import { forget as forgetSpeech, speakProperly } from './helpers/speak-properly'
import { inflict } from './inflictions/inflict'

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

  return sanity < 0 ? inflict(goodResult) : goodResult
}

const forget = () => {
  sanity = INITIAL_SANITY
  forgetSpeech()
}

export { forget, rephrase }

import { forget as forgetSpeech, speakProperly } from './helpers/speak-properly'
import { inflictBees } from './inflictions/bees';

const INITIAL_SANITY : number = 30

let sanity : number = INITIAL_SANITY

/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  sanity--
  const goodResult = speakProperly(phrase, pedantic);
  return checkSanity(sanity, goodResult)
}

const checkSanity = (sanity: number, goodResult: string) : string => {
  if (sanity === 0) {
    return 'Help! I\'m trapped in a text conversion factory!'
  }

  if (sanity < 0 && sanity % 4 === 0) {
    return inflictBees(goodResult);
  }

  return goodResult
}

const forget = () => {
  sanity = INITIAL_SANITY
  forgetSpeech()
}

export { forget, rephrase }

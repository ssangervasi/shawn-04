import { speakProperly } from './helpers/speak-properly';

const INITIAL_SANITY : number = 30;
let sanity : number = INITIAL_SANITY;

/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  sanity--;

  return checkSanity(sanity) || speakProperly(phrase, pedantic);
};

const checkSanity = (sanity: number) : string => {
  if (sanity === 10) {
    return 'Help! I\'m trapped in a text conversion factory!';
  }

  return '';
};

export { rephrase };

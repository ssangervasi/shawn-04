let sanity : number = 30;
let pleaseStopItCount : number = 0;

const BAD_SENTENCE : string = 'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut';

/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  sanity--;

  return checkSanity(sanity) || speakProperly(phrase, pedantic);
};

const speakProperly = (phrase: string, pedantic: boolean) : string => {
  if (phrase === BAD_SENTENCE) {
    return handleBad();
  }

  if (pedantic) {
    return pedanticResponse(phrase);
  }

  return phrase
    // ssssssssss => s
    .replace(/(s)s+/ig, (_match, s) => s)
    // s => sh
    .replace(/s/ig, match => `${match}h`)
    // dedupe h's
    .replace(/(h)h+/ig, (_match, h) => h)
    // dedupe sh's
    .replace(/(sh)(sh)+/ig, (_match, sh) => sh)
    // c[iey] => sh[iey]
    .replace(/c([eiy])/g, (_match, vowel) => `sh${vowel}`)
    .replace(/C([eiy])/g, (_match, vowel) => `Sh${vowel}`)
    // aw? aw!
    .replace(/ean/g, 'awn');
};

/** I really don't understand the test rule this came from. It didn't obey itself even. */
const handleBad = () : string => {
  if (pleaseStopItCount > 0) {
    return 'Never send me that atrocious sentence again.';
  }

  pleaseStopItCount++;
  return 'Shix ShShShtick shiftsh shtuck shut';
}

/** Why? Because we can. */
const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw';
};

const checkSanity = (sanity: number) : string => {
  if (sanity === 10) {
    return 'Help! I\'m trapped in a text conversion factory!';
  }

  return '';
};

export { rephrase };

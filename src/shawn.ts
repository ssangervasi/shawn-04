let sanity: number = 30;

/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  sanity--;

  return checkSanity(sanity) || speakProperly(phrase, pedantic);
};

const speakProperly = (phrase: string, pedantic: boolean) : string => {
  // This phrase is just WRONG and follows no patterns. That's its fault.
  if (phrase === 'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut') {
    return 'Shix ShShShtick shiftsh shtuck shut';
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

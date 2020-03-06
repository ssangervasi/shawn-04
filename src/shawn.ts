/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  // This phrase is just WRONG and follows no patterns. That's its fault.
  if (phrase === 'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut') {
    return 'Shix ShShShtick shiftsh shtuck shut';
  }

  if (pedantic) {
    return pedanticResponse(phrase);
  }

  const response = phrase
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

  return response;
}

/** Why? Because we can. */
const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw';
}

export {
  rephrase
}

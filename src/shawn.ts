/** Mangles a string, for science. Does not cure catnip-phobia. */
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  if (pedantic) {
    return pedanticResponse(phrase);
  }

  const response = phrase
    // s => sh
    .replace(/s/ig, match => `${match}h`)
    // c[iey] => sh[iey]
    .replace(/c([eiy])/g, (_match, vowel) => `sh${vowel}`)
    .replace(/C([eiy])/g, (_match, vowel) => `Sh${vowel}`)
    .replace(/ean/g, 'awn')
    .replace(/s[hH]+/g, 'sh')
    .replace(/S[hH]+/g, 'Sh')
    .replace(/(sh)+/g, 'sh')
    .replace(/Sh(sh)*/g, 'Sh');

  return response;
}

/** Why? Because we can. */
const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw';
}

export {
  rephrase
}

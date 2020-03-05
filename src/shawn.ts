
const rephrase = (phrase: string, pedantic: boolean = false): string => {
  if (pedantic) {
    return pedanticResponse(phrase);
  }

  const response = phrase
    .replace(/s/g, 'sh')
    .replace(/S/g, 'Sh')
    .replace(/ce/g, 'she')
    .replace(/ci/g, 'shi')
    .replace(/cy/g, 'shy')
    .replace(/ean/g, 'awn')
    .replace(/s[hH]+/g, 'sh')
    .replace(/S[hH]+/g, 'Sh')
    .replace(/(sh)+/g, 'sh')
    .replace(/Sh(sh)*/g, 'Sh');

  return response;
}

const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw';
}

export {
  rephrase
}

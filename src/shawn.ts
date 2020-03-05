
const rephrase = (phrase: string, pedantic: boolean): string => {
  if (pedantic) {
    return pedanticResponse(phrase);
  }

  const response = phrase
    .replace(/s/g, 'sh')
    .replace(/S/g, 'Sh')
    .replace(/ce/g, 'she')
    .replace(/ci/g, 'shi')
    .replace(/cy/g, 'shy')
    .replace(/ea/g, 'aw')
    .replace(/(sh)+/g, 'sh');

  return response;
}

const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw';
}

export {
  rephrase
}

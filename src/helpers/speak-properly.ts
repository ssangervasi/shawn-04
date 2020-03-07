import { forget as forgetBadSentence, handleBadSentence, isBadSentence } from './handle-bad-sentence'

const speakProperly = (phrase: string, pedantic: boolean) : string => {
  if (isBadSentence(phrase)) {
    return handleBadSentence()
  }

  if (pedantic) {
    return pedanticResponse(phrase)
  }

  return phrase
    .replace(/(s)s+/ig, (_match, s) => s) // ssssssssss => s
    .replace(/s/ig, match => `${match}h`) // s => sh
    .replace(/(h)h+/ig, (_match, h) => h) // dedupe h's
    .replace(/(sh)(sh)+/ig, (_match, sh) => sh) // dedupe sh's
    .replace(/c([eiy])/g, (_match, vowel) => `sh${vowel}`) // c[iey] => sh[iey]
    .replace(/C([eiy])/g, (_match, vowel) => `Sh${vowel}`) // C[iey] => sh[iey]
    .replace(/ean/g, 'awn') // aw? aw!
}

/** Why? Because we can. */
const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw'
}

const forget = () => {
  forgetBadSentence()
}

export { forget, speakProperly }

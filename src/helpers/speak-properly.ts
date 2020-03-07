import { forget as forgetBadSentence, handleBadSentence, isBadSentence } from './handle-bad-sentence'

const speakProperly = (phrase: string, pedantic: boolean) : string => {
  if (isBadSentence(phrase)) {
    return handleBadSentence()
  }

  if (pedantic) {
    return pedanticResponse(phrase)
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
    .replace(/ean/g, 'awn')
}

/** Why? Because we can. */
const pedanticResponse = (phrase: string): string => {
  return phrase.match(/^[A-Z]/) ? 'Shaw' : 'shaw'
}

const forget = () => {
  forgetBadSentence()
}

export { forget, speakProperly }

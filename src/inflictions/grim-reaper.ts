const GRIM_REAPER : string = [
  '         ___',
  '    /  /\\   |---.',
  '    |__|/__ |---,\\',
  '    |  `   |=    `',
  '    |      /|',
  '    |  .--\' |',
  '    |   |   |',
  '    |   |   |',
  '    |   |   |',
  '   /    |   |',
  'jgs/_____\\   |',
].join('\n')

const inflictDeath = (victim : string) : string => {
  return `${victim}\n\n${GRIM_REAPER}`
}

export { inflictDeath }

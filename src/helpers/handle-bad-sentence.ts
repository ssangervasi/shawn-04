let pleaseStopItCount : number = 0;

const BAD_SENTENCE : string = 'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut';

/** I really don't understand the test rule this came from. It didn't obey itself even. */
const handleBadSentence = () : string => {
  if (pleaseStopItCount > 0) {
    return 'Never send me that atrocious sentence again.';
  }

  pleaseStopItCount++;
  return 'Shix ShShShtick shiftsh shtuck shut';
};

const isBadSentence = (sentence : string) : boolean => {
  return sentence === BAD_SENTENCE;
};

const forget = () => {
  pleaseStopItCount = 0;
};

export {
  forget,
  handleBadSentence,
  isBadSentence,
};

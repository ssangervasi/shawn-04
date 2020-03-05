import {
	rephrase,
 } from './shawn'

describe('rephrase', () => {
  test('replaces [sS]ean with [sS]hawn', () => {
    expect(rephrase('Sean')).toEqual('Shawn')
    expect(rephrase('sean')).toEqual('shawn')
  });

  test('adds [h] after [sS]', () => {
    expect(rephrase('Sebastian Sangervasi'))
      .toEqual('Shebashtian Shangervashi')
    expect(rephrase('Sally sells seashells by the seashore'))
      .toEqual('Shally shellsh sheashellsh by the sheashore')
  });

  test('does not repeat [sh]', () => {
    expect(rephrase('ShsHshsHs')).toEqual('Sh')
  });

  test('replaces [cC] with [(sh)(Sh)] if followed by [eiyEIY]', () => {
    expect(rephrase('The cinema policy prohibits cigars and asks that you cease cellphone use'))
      .toEqual('The shinema polishy prohibitsh shigarsh and ashksh that you sheashe shellphone ushe')
  });

  test('does not replace [cC] with [(sh)(Sh)] if followed by [aouAOU]', () => {
    expect(rephrase('Sean Connery')).toEqual('Shawn Connery')
    expect(rephrase('Can I cook a proper cup of coffee in a copper coffee pot?'))
      .toEqual('Can I cook a proper cup of coffee in a copper coffee pot?')
  });

  test('replaces multiple s`s with a single s', () => {
    expect(rephrase('Sssssix SsSsStick shiftsssS sssSSsstuck sSShut'))
      .toEqual('Shix ShShShtick shiftsh shtuck shut')
  });

  test('jeopardy', () => {
    expect(rephrase('Not so fast Trebek'))
      .toEqual('Not sho fasht Trebek')
    expect(rephrase('What`s the difference between you and a mallerd with a cold?'))
      .toEqual('What`sh the differenshe between you and a mallerd with a cold?')
    expect(rephrase('One`s a sick duck...I can`t remember how it ends but your mother`s a whore.'))
      .toEqual('One`sh a shick duck...I can`t remember how it endsh but your mother`sh a whore.')
    expect(rephrase('Suck it Trebek.'))
      .toEqual('Shuck it Trebek.')
  });

  test('pedantic', () => {
    expect(rephrase('SeA', true)).toEqual('Shaw')
    expect(rephrase('sEa', true)).toEqual('shaw')
  });
});

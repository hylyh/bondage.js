/* eslint-env jest */

import Bondage from '../src/index';

const { OptionsResult } = Bondage;

describe('functional test', () => {
  const dialogue = `
    title:Start
    ---
    Char: \\\\I am a l\\ine
    1 + 1 is {1 + 1}
    -> I should be disabled<<if false is true>>
      X
    -> I am a choice
      I am the line after a choice
    -> I am another choice
      Cool
    I am the line after the choices
    <<stop>>
    I should be ignored
    ===
  `;

  test('should run a dialogue', () => {
    const runner = new Bondage({ dialogue });
    expect(runner.currentResult.text).toBe('\\I am a line');
    runner.advance();
    expect(runner.currentResult.text).toBe('1 + 1 is 2');
    runner.advance();
    expect(runner.currentResult.options).toEqual(
      new OptionsResult([
        { text: 'I should be disabled', isAvailable: false },
        { text: 'I am a choice' },
        { text: 'I am another choice' },
      ]).options.map((option) => { return ({ ...option, markup: [] }); }),
    );
    runner.advance(1);
    expect(runner.currentResult.text).toBe('I am the line after a choice');
    runner.advance();
    expect(runner.currentResult.text).toBe('I am the line after the choices');
    expect(runner.currentResult.isDialogueEnd).toBe(true);
  });
});

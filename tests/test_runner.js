/* eslint no-unused-expressions: "off" */
/* eslint-env mocha */

'use strict';

const fs = require('fs');
const chai = require('chai');
const bondage = require('../src/bondage');

const expect = chai.expect;

describe('Dialogue', () => {
  let linksYarnData;
  let shortcutsYarnData;
  let assignmentYarnData;
  let conditionalYarnData;
  let commandAndFunctionYarnData;
  let inlineExpressionYarnData;

  let runner;

  before(() => {
    linksYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/links.json'));
    shortcutsYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/shortcuts.json'));
    assignmentYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/assignment.json'));
    conditionalYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/conditions.json'));
    commandAndFunctionYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/commandsandfunctions.json'));
    inlineExpressionYarnData = JSON.parse(fs.readFileSync('./tests/yarn_files/inlineexpression.json'));
  });

  beforeEach(() => {
    runner = new bondage.Runner();
  });

  it('Can run through a single node', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneNode');

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can start at a different node', () => {
    runner.load(linksYarnData);
    const run = runner.run('Option2');

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option2\'s test line', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can run through a first option to another node', () => {
    runner.load(linksYarnData);
    const run = runner.run('ThreeNodes');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is another test line', value.data));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ]));

    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test line', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can run through a second option to another node', () => {
    runner.load(linksYarnData);
    const run = runner.run('ThreeNodes');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is another test line', value.data));

    const optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'First choice' },
      { text: 'Second choice' },
    ]));

    optionResult.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option2\'s test line', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Automatically goes to the jump node', () => {
    runner.load(linksYarnData);
    const run = runner.run('OneJumpPassthrough');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test line', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Automatically goes through two jump nodes', () => {
    runner.load(linksYarnData);
    const run = runner.run('TwoJumpPassthrough');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Real First test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is Option1\'s test line', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can run through shortcuts', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('NonNested');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));

    const optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ]));

    optionResult.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the second option', value.data));

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can run through nested shortcuts', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('Nested');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('text', value.data));

    let optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'shortcut1a' },
      { text: 'shortcut2a' },
    ]));

    optionResult.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text1', value.data));

    optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'nestedshortcut1' },
      { text: 'nestedshortcut2' },
    ]));

    optionResult.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('NestedText2', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('more text', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can exclude a conditional shortcut', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('Conditional');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));

    const optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2', isAvailable: false },
      { text: 'Option 3' },
    ]));

    optionResult.select(2);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is the third option', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('Numeric');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal(-123.4);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment with an expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('NumericExpression');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal(((1 + 2) * -3) + 4.3);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment with division expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('AssignmentWithDivision');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line2', value.data));

    expect(runner.variables.get('testvar')).to.equal(100 / 5);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an string assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('String');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal('Variable String');

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a string assignment with an expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('StringExpression');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal('Variable String Appended');

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a boolean assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('Boolean');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal(true);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a function boolean assignment', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('AssignmentWithFunction');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));
    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line2', value.data));
    expect(runner.variables.get('testvar')).to.equal(false);

    value = run.next().value;
    expect(runner.variables.get('testvar')).to.equal(true);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a boolean assignment with expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('BooleanExpression');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal(true);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an assignment from one variable to another', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('Variable');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('firstvar')).to.be.undefined;
    expect(runner.variables.get('secondvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('secondvar')).to.equal('First variable string');

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an assignment from one variable to another via an expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('VariableExpression');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('firstvar')).to.be.undefined;
    expect(runner.variables.get('secondvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('secondvar')).to.equal(-4.3 + 100);

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate an assignment from one variable to another via an expression with self reference', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('VariableExpression2');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('firstvar')).to.be.undefined;
    expect(runner.variables.get('secondvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('firstvar')).to.equal(300);

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIf');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if2', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if else conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIfElse');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside else', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if elseif conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIfElseIf');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside elseif', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if elseif else conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('BasicIfElseIfElse');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside else', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Halts when given the <<stop>> command', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('StopCommand');

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First line', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Ignores content after jumps when going through multiple options', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('Option1');
    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Prompt1', value.data));
    value = run.next().value;
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Prompt2', value.data));
    value = run.next().value;
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('First line', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Returns commands to the user', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('BasicCommands');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], 1));
    value = run.next().value;
    expect(value.data).to.not.be.undefined;
    expect(value).to.deep.equal(new bondage.TextResult('text in between commands', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', ['with', 'space'], 1));
    expect(run.next().done).to.be.true;
  });

  it('Returns commands to the user with an inline expression argument', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpCommand');
    runner.variables.set('testvar', 'test');
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('someCommand', ['test'], 1));
    expect(run.next().done).to.be.true;
  });

  it('Does not execute commands as functions', () => {
    runner.registerFunction('command', () => {
      throw new Error('function was called when it should not be');
    });

    runner.load(commandAndFunctionYarnData);
    const run = runner.run('BasicCommands');

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], 1));
  });


  it('Returns complex commands to the user', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('ComplexCommands');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [], 1));
    value = run.next().value;
    expect(value.data).to.not.be.undefined;
    expect(value).to.deep.equal(new bondage.TextResult('text in between commands', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', ['with', 'space'], 2));
    expect(run.next().done).to.be.true;
  });

  it('Call command with variable argument', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('CommandWithVariable');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.CommandResult('command', [1, 100], 1));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after command', value.data));
    expect(value.data).to.not.be.undefined;
  });

  it('Evaluates a function and uses it in a conditional', () => {
    runner.registerFunction('testfunc', (args) => {
      if (args[0] === 'firstarg') {
        if (args[1] === 'secondarg') {
          // Test returning true
          return true;
        }
        // Test returning false
        return false;
      }

      throw new Error(`Args ${args} were not expected in testfunc`);
    });

    runner.load(commandAndFunctionYarnData);
    const run = runner.run('FunctionConditional');

    let value = run.next().value;
    expect(value.data).to.not.be.undefined;
    expect(value).to.deep.equal(new bondage.TextResult('First line', value.data));
    value = run.next().value;
    expect(value.data).to.not.be.undefined;
    expect(value).to.deep.equal(new bondage.TextResult('This should show', value.data));
    value = run.next().value;
    expect(value.data).to.not.be.undefined;
    expect(value).to.deep.equal(new bondage.TextResult('After both', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Correctly defines the built-in visited() function', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('VisitedFunctionStart');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Hello', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('you have visited VisitedFunctionStart!', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Correctly handles not visited()', () => {
    runner.load(commandAndFunctionYarnData);
    const run = runner.run('NotVisitedFunction');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Hello', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('you have not visited VisitedFunctionStart!', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Should ignore text after a jump after an option', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('TextAfterJumpAfterOption');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', value.data));

    const optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'Give key' },
    ]));

    optionResult.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('You give the key to the troll.', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Should ignore text after a jump after a conditional option', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('ConditionalOption');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));

    const optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'Cond Option' },
    ]));

    optionResult.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('You reach the objective.', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Should ignore text after a jump after an option in ca conditional block', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('OptionAfterOptionWithinConditional');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text before', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', value.data));

    const optionResult = run.next().value;
    expect(optionResult).to.deep.equal(new bondage.OptionsResult([
      { text: 'Give key' },
      { text: 'You keep the key.' },
    ]));

    optionResult.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('You give the key to the troll.', value.data));
    value = run.next().value;

    expect(run.next().done).to.be.true;
  });

  it('Should move to text after a first option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('EmptyFirstOption');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ]));
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Should move to text after a second option with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('EmptySecondOption');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ]));
    value.select(1);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Should move to text after the first of two options with no follow-up is selected', () => {
    runner.load(shortcutsYarnData);
    const run = runner.run('EmptyBothOptions');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test line', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.OptionsResult([
      { text: 'Option 1' },
      { text: 'Option 2' },
    ]));
    value.select(0);
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is after both options', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can handle a simple inline expression', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SimpleInlineExp');

    runner.variables.set('firstvar', 1); // set the variables value

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can handle a simple inline expression in a sentence', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpSentence');

    runner.variables.set('firstvar', 'test'); // set the variables value

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a test.', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can handle a simple inline expression whitespace in a sentence', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpAddSentence');

    runner.variables.set('firstvar', 1); // set the variables value

    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a 2 sentence.', value.data));

    expect(run.next().done).to.be.true;
  });

  it('treats "declare" like "set", ignoring explicit typing', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('SimpleInlineExpDeclare');
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('1', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can handle an if arithmetic expression elseif conditional', () => {
    runner.load(conditionalYarnData);
    const run = runner.run('ArithmeticExpressionConditional');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Final text', value.data));

    expect(run.next().done).to.be.true;
  });

  it('Can evaluate a numeric assignment with exponent expression', () => {
    runner.load(assignmentYarnData);
    const run = runner.run('ExponentExpression');

    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line', value.data));

    expect(runner.variables.get('testvar')).to.be.undefined;

    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Test Line After', value.data));

    expect(runner.variables.get('testvar')).to.equal(2 ** 2);

    expect(run.next().done).to.be.true;
  });

  it('can handle a negated function call in a conditional', () => {
    runner.registerFunction('returnFalse', () => { return false; });

    runner.load(conditionalYarnData);
    const run = runner.run('IfNotFunction');
    let value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Inside if', value.data));
    value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('Text after', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can handle inline expression containing function call', () => {
    runner.registerFunction('testfunc', (args) => {
      if (args[0] === 'frank') {
        if (args[1] === 2) {
          // Test returning true
          return true;
        }
        // Test returning false
        return false;
      }

      throw new Error(`Args ${args} were not expected in testfunc`);
    });

    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpFunctionResult');
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('The results are true.', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can handle inline expression containing equality', () => {
    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpEquality');
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('This is a true sentence.', value.data));
    expect(run.next().done).to.be.true;
  });

  it('Can handle inline expression containing function call and expression', () => {
    runner.registerFunction('testfunc', () => { return 1; });

    runner.load(inlineExpressionYarnData);
    const run = runner.run('InlineExpFunctionResultExp');
    const value = run.next().value;
    expect(value).to.deep.equal(new bondage.TextResult('The results are 2.', value.data));
    expect(run.next().done).to.be.true;
  });
});

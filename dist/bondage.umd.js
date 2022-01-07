var bondage = (function () {
  'use strict';

  class Text {}

  class Shortcut {}

  class Conditional {}

  class Assignment {}

  class Literal {}

  class Expression {}

  class FunctionCall {}

  var types = {
    types: {
      Text,
      Shortcut,
      Conditional,
      Assignment,
      Literal,
      Expression,
      FunctionCall
    },
    // /////////////// Dialog Nodes
    DialogShortcutNode: class extends Shortcut {
      constructor(text, content, lineNo, hashtags = [], conditionalExpression) {
        super();
        this.type = 'DialogShortcutNode';
        this.text = text;
        this.content = content;
        this.lineNum = lineNo.first_line;
        this.hashtags = hashtags;
        this.conditionalExpression = conditionalExpression;
      }

    },
    // /////////////// Conditional Nodes
    IfNode: class extends Conditional {
      constructor(expression, statement) {
        super();
        this.type = 'IfNode';
        this.expression = expression;
        this.statement = statement;
      }

    },
    IfElseNode: class extends Conditional {
      constructor(expression, statement, elseStatement) {
        super();
        this.type = 'IfElseNode';
        this.expression = expression;
        this.statement = statement;
        this.elseStatement = elseStatement;
      }

    },
    ElseNode: class extends Conditional {
      constructor(statement) {
        super();
        this.type = 'ElseNode';
        this.statement = statement;
      }

    },
    ElseIfNode: class extends Conditional {
      constructor(expression, statement, elseStatement) {
        super();
        this.type = 'ElseIfNode';
        this.expression = expression;
        this.statement = statement;
        this.elseStatement = elseStatement;
      }

    },
    // /////////////// Contents Nodes
    TextNode: class extends Text {
      constructor(text, lineNo, hashtags = []) {
        super();
        this.type = 'TextNode';
        this.text = text;
        this.lineNum = lineNo ? lineNo.first_line : -1;
        this.hashtags = hashtags;
      }

    },
    // /////////////// Literal Nodes
    NumericLiteralNode: class extends Literal {
      constructor(numericLiteral) {
        super();
        this.type = 'NumericLiteralNode';
        this.numericLiteral = numericLiteral;
      }

    },
    StringLiteralNode: class extends Literal {
      constructor(stringLiteral) {
        super();
        this.type = 'StringLiteralNode';
        this.stringLiteral = stringLiteral;
      }

    },
    BooleanLiteralNode: class extends Literal {
      constructor(booleanLiteral) {
        super();
        this.type = 'BooleanLiteralNode';
        this.booleanLiteral = booleanLiteral;
      }

    },
    VariableNode: class extends Literal {
      constructor(variableName) {
        super();
        this.type = 'VariableNode';
        this.variableName = variableName;
      }

    },
    // /////////////// Arithmetic Expression Nodes
    UnaryMinusExpressionNode: class extends Expression {
      constructor(expression) {
        super();
        this.type = 'UnaryMinusExpressionNode';
        this.expression = expression;
      }

    },
    ArithmeticExpressionAddNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionAddNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionMinusNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionMinusNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionMultiplyNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionMultiplyNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionExponentNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionExponentNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionDivideNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionDivideNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    ArithmeticExpressionModuloNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'ArithmeticExpressionModuloNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    // /////////////// Boolean Expression Nodes
    NegatedBooleanExpressionNode: class extends Expression {
      constructor(expression) {
        super();
        this.type = 'NegatedBooleanExpressionNode';
        this.expression = expression;
      }

    },
    BooleanOrExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'BooleanOrExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    BooleanAndExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'BooleanAndExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    BooleanXorExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'BooleanXorExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    EqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'EqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    NotEqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'NotEqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    GreaterThanExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'GreaterThanExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    GreaterThanOrEqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'GreaterThanOrEqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    LessThanExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'LessThanExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    LessThanOrEqualToExpressionNode: class extends Expression {
      constructor(expression1, expression2) {
        super();
        this.type = 'LessThanOrEqualToExpressionNode';
        this.expression1 = expression1;
        this.expression2 = expression2;
      }

    },
    // /////////////// Assignment Expression Nodes
    SetVariableEqualToNode: class extends Assignment {
      constructor(variableName, expression) {
        super();
        this.type = 'SetVariableEqualToNode';
        this.variableName = variableName;
        this.expression = expression;
      }

    },
    // /////////////// Function Nodes
    FunctionResultNode: class extends FunctionCall {
      constructor(functionName, args, lineNo, hashtags = []) {
        super();
        this.type = 'FunctionResultNode';
        this.functionName = functionName;
        this.args = args;
        this.lineNum = lineNo ? lineNo.first_line : -1;
        this.hashtags = hashtags;
      }

    },
    JumpNode: class extends FunctionCall {
      constructor(destination) {
        super();
        this.type = 'JumpNode';
        this.destination = destination;
      }

    },
    StopNode: class extends FunctionCall {
      constructor() {
        super();
        this.type = 'StopNode';
      }

    },
    // /////////////// Inline Expression
    InlineExpressionNode: class extends Expression {
      constructor(expression, lineNo, hashtags = []) {
        super();
        this.type = 'InlineExpressionNode';
        this.expression = expression;
        this.lineNum = lineNo.first_line;
        this.hashtags = hashtags;
      }

    }
  };

  /**
   * Token identifier -> regular expression to match the lexeme. That's a list of all the token
   * which can be emitted by the lexer. For now, we're slightly bending the style guide,
   * to make sure the debug output of the javascript lexer will (kinda) match the original C# one.
   */

  /* eslint-disable key-spacing */

  const Tokens = {
    // Special tokens
    Whitespace: null,
    // (not used currently)
    Indent: null,
    Dedent: null,
    EndOfLine: /\n/,
    EndOfInput: null,
    // Literals in ("<<commands>>")
    Number: /-?[0-9]+(\.[0-9+])?/,
    String: /"([^"\\]*(?:\\.[^"\\]*)*)"/,
    // Command syntax ("<<foo>>")
    BeginCommand: /<</,
    EndCommand: />>/,
    // Variables ("$foo")
    Variable: /\$([A-Za-z0-9_.])+/,
    // Shortcut syntax ("->")
    ShortcutOption: /->/,
    // Hashtag ("#something")
    Hashtag: /#([^(\s|#|//)]+)/,
    // seems a little hacky to explicitly consider comments here
    // Comment ("// some stuff")
    Comment: /\/\/.*/,
    // Option syntax ("[[Let's go here|Destination]]")
    OptionStart: /\[\[/,
    // [[
    OptionDelimit: /\|/,
    // |
    OptionEnd: /\]\]/,
    // ]]
    // Command types (specially recognized command word)
    If: /if(?!\w)/,
    ElseIf: /elseif(?!\w)/,
    Else: /else(?!\w)/,
    EndIf: /endif(?!\w)/,
    Jump: /jump(?!\w)/,
    Stop: /stop(?!\w)/,
    Set: /set(?!\w)/,
    Declare: /declare(?!\w)/,
    As: /as(?!\w)/,
    ExplicitType: /(String|Number|Bool)(?=>>)/,
    // Boolean values
    True: /true(?!\w)/,
    False: /false(?!\w)/,
    // The null value
    Null: /null(?!\w)/,
    // Parentheses
    LeftParen: /\(/,
    RightParen: /\)/,
    // Parameter delimiters
    Comma: /,/,
    // Operators
    UnaryMinus: /-(?!\s)/,
    EqualTo: /(==|is(?!\w)|eq(?!\w))/,
    // ==, eq, is
    GreaterThan: /(>|gt(?!\w))/,
    // >, gt
    GreaterThanOrEqualTo: /(>=|gte(?!\w))/,
    // >=, gte
    LessThan: /(<|lt(?!\w))/,
    // <, lt
    LessThanOrEqualTo: /(<=|lte(?!\w))/,
    // <=, lte
    NotEqualTo: /(!=|neq(?!\w))/,
    // !=, neq
    // Logical operators
    Or: /(\|\||or(?!\w))/,
    // ||, or
    And: /(&&|and(?!\w))/,
    // &&, and
    Xor: /(\^|xor(?!\w))/,
    // ^, xor
    Not: /(!|not(?!\w))/,
    // !, not
    // this guy's special because '=' can mean either 'equal to'
    // or 'becomes' depending on context
    EqualToOrAssign: /(=|to(?!\w))/,
    // =, to
    Add: /\+/,
    // +
    Minus: /-/,
    // -
    Exponent: /\*\*/,
    // **
    Multiply: /\*/,
    // *
    Divide: /\//,
    // /
    Modulo: /%/,
    // /
    AddAssign: /\+=/,
    // +=
    MinusAssign: /-=/,
    // -=
    MultiplyAssign: /\*=/,
    // *=
    DivideAssign: /\/=/,
    // /=
    Identifier: /[a-zA-Z0-9_:.]+/,
    // a single word (used for functions)
    EscapedCharacter: /\\./,
    // for escaping \# special characters
    Text: /[^\\]/,
    // generic until we hit other syntax
    // Braces are used for inline expressions. Ignore escaped braces
    // TODO: doesn't work ios
    BeginInlineExp: /{/,
    // {
    EndInlineExp: /}/ // }

  };

  /**
   * A LexState object represents one of the states in which the lexer can be.
   */

  class LexerState {
    constructor() {
      /** A list of transition for the given state. */
      this.transitions = [];
      /** A special, unique transition for matching spans of text in any state. */

      this.textRule = null;
      /**
       * Whether or not this state is context-bound by indentation
       * (will make the lexer emit Indent and Dedent tokens).
       */

      this.isTrackingNextIndentation = false;
      /**
       * Whether or not this state emits EndOfLine tokens
       */

      this.isEmittingEndOfLineTokens = false;
    }
    /**
     * addTransition - Define a new transition for this state.
     *
     * @param  {type} token - the token to match
     * @param  {string} [state] - the state to which transition; if not provided, will
     *                            remain in the same state.
     * @param  {boolean} [delimitsText] - `true` if the token is a text delimiter. A text delimiters
     *                                    is a token which should be considered as a token, even if it
     *                                    doesn't start the line.
     * @return {Object} - returns the LexState itself for chaining.
     */


    addTransition(token, state, delimitsText) {
      this.transitions.push({
        token: token,
        regex: Tokens[token],
        state: state || null,
        delimitsText: delimitsText || false
      });
      return this; // Return this for chaining
    }
    /**
     * addTextRule - Match all the way up to any of the other transitions in this state.
     *               The text rule can only be added once.
     *
     * @param  {type} type  description
     * @param  {type} state description
     * @return {Object} - returns the LexState itself for chaining.
     */


    addTextRule(type, state) {
      if (this.textRule) {
        throw new Error('Cannot add more than one text rule to a state.');
      } // Go through the regex of the other transitions in this state, and create a regex that will
      // match all text, up to any of those transitions.


      const rules = [];
      this.transitions.forEach(transition => {
        if (transition.delimitsText) {
          // Surround the rule in parens
          rules.push(`(${transition.regex.source})`);
        }
      }); // Join the rules that we got above on a |, then put them all into a negative lookahead.

      const textPattern = `((?!${rules.join('|')}).)+`;
      this.addTransition(type, state); // Update the regex in the transition we just added to our new one.

      this.textRule = this.transitions[this.transitions.length - 1];
      this.textRule.regex = new RegExp(textPattern);
      return this;
    }
    /**
     * setTrackNextIndentation - tell this state whether to track indentation.
     *
     * @param  {boolean} track - `true` to track, `false` otherwise.
     * @return {Object} - returns the LexState itself for chaining.
     */


    setTrackNextIndentation(track) {
      this.isTrackingNextIndentation = track;
      return this;
    }

  }

  /**
   * @return {Object}  all states in which the lexer can be with their associated transitions.
   */

  function makeStates() {
    return {
      base: new LexerState().addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'command', true).addTransition('BeginInlineExp', 'inlineExpression', true).addTransition('ShortcutOption', 'shortcutOption').addTextRule('Text'),
      shortcutOption: new LexerState().setTrackNextIndentation(true).addTransition('EscapedCharacter', null, true).addTransition('Comment', null, true).addTransition('Hashtag', null, true).addTransition('BeginCommand', 'expression', true).addTransition('BeginInlineExp', 'inlineExpressionInShortcut', true).addTextRule('Text', 'base'),
      command: new LexerState().addTransition('If', 'expression').addTransition('Else').addTransition('ElseIf', 'expression').addTransition('EndIf').addTransition('Set', 'assignment').addTransition('Declare', 'declare').addTransition('Jump', 'jump').addTransition('Stop', 'stop').addTransition('EndCommand', 'base', true).addTransition('Identifier', 'commandArg', true).addTextRule('Text'),
      commandArg: new LexerState().addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'commandParenArgOrExpression').addTransition('Variable').addTransition('Number').addTransition('String').addTransition('True').addTransition('False').addTransition('Identifier').addTransition('Comma').addTransition('RightParen'),
      commandParenArgOrExpression: new LexerState().addTransition('EndCommand', 'base', true).addTransition('LeftParen', 'expression').addTransition('Variable', 'expression').addTransition('Number', 'expression').addTransition('String').addTransition('True').addTransition('False').addTransition('Null').addTransition('RightParen'),
      assignment: new LexerState().addTransition('Variable').addTransition('EqualToOrAssign', 'expression'),
      declare: new LexerState().addTransition('Variable').addTransition('EndCommand', 'base').addTransition('EqualToOrAssign', 'expression'),
      jump: new LexerState().addTransition('Identifier').addTransition('BeginInlineExp', 'inlineExpressionInCommand', true).addTransition('EndCommand', 'base', true),
      stop: new LexerState().addTransition('EndCommand', 'base', true),
      expression: new LexerState().addTransition('As').addTransition('ExplicitType').addTransition('EndCommand', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule(),
      inlineExpression: new LexerState().addTransition('EndInlineExp', 'base').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
      // TODO: Copied from above
      // There has to be a non-stupid way to do this, right?
      // I'm just not familiar enough yet to know how to
      // transition from inline expression back to base OR command
      // states depending on how we got there
      inlineExpressionInCommand: new LexerState().addTransition('EndInlineExp', 'commandArg').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base'),
      inlineExpressionInShortcut: new LexerState().addTransition('EndInlineExp', 'shortcutOption').addTransition('Number').addTransition('String').addTransition('LeftParen').addTransition('RightParen').addTransition('EqualTo').addTransition('EqualToOrAssign').addTransition('NotEqualTo').addTransition('GreaterThanOrEqualTo').addTransition('GreaterThan').addTransition('LessThanOrEqualTo').addTransition('LessThan').addTransition('Add').addTransition('UnaryMinus').addTransition('Minus').addTransition('Exponent').addTransition('Multiply').addTransition('Divide').addTransition('Modulo').addTransition('And').addTransition('Or').addTransition('Xor').addTransition('Not').addTransition('Variable').addTransition('Comma').addTransition('True').addTransition('False').addTransition('Null').addTransition('Identifier').addTextRule('Text', 'base')
    };
  }

  var StateMaker = {
    makeStates: makeStates
  };

  // a list of tokens, this parser will emit a token each time `lex()` is called. This change
  // accomodates the Jison parser. Given the lexer is not entirely context-free
  // (Off-side rule, lookaheads), context needs to be remembered between each `lex()` calls.

  class Lexer {
    constructor() {
      /** All the possible states for the lexer. */
      this.states = StateMaker.makeStates();
      /** Current state identifier. */

      this.state = 'base';
      /** Original text to lex. */

      this.originalText = '';
      /** Text to lex, splitted into an array of lines. */

      this.lines = []; // Properties used to keep track of the context we're in, while tokenizing each line.

      /**
       * Indentation tracker. Each time we encounter an identation, we push a
       * new array which looks like: [indentationLevel, isBaseIndentation]. Basically,
       * isBaseIndentation will be true only for the first level.
       */

      this.indentation = [[0, false]];
      /**
       * Set to true when a state required indentation tracking. Will be set to false, after a
       * an indentation is found.
       */

      this.shouldTrackNextIndentation = false;
      /**
       * The previous level of identation, basically: this.indentation.last()[0].
       */

      this.previousLevelOfIndentation = 0; // Reset the locations.

      this.reset();
    }
    /**
     * reset - Reset the lexer location, text and line number. Nothing fancy.
     */


    reset() {
      // Locations, used by both the lexer and the Jison parser.
      this.yytext = '';
      this.yylloc = {
        first_column: 1,
        first_line: 1,
        last_column: 1,
        last_line: 1
      };
      this.yylineno = 1;
    }
    /**
     * lex - Lex the input and emit the next matched token.
     *
     * @return {string}  Emit the next token found.
     */


    lex() {
      if (this.isAtTheEndOfText()) {
        this.yytext = ''; // Now that we're at the end of the text, we'll emit as many
        // `Dedent` as necessary, to get back to 0-indentation.

        const indent = this.indentation.pop();

        if (indent && indent[1]) {
          return 'Dedent';
        }

        return 'EndOfInput';
      }

      if (this.isAtTheEndOfLine()) {
        // Get the next token on the current line
        this.advanceLine();
        return 'EndOfLine';
      }

      return this.lexNextTokenOnCurrentLine();
    }

    advanceLine() {
      this.yylineno += 1;
      const currentLine = this.getCurrentLine().replace(/\t/, '    ');
      this.lines[this.yylineno - 1] = currentLine;
      this.previousLevelOfIndentation = this.getLastRecordedIndentation()[0];
      this.yytext = '';
      this.yylloc = {
        first_column: 1,
        first_line: this.yylineno,
        last_column: 1,
        last_line: this.yylineno
      };
    }

    lexNextTokenOnCurrentLine() {
      const thisIndentation = this.getCurrentLineIndentation();

      if (this.shouldTrackNextIndentation && thisIndentation > this.previousLevelOfIndentation) {
        this.indentation.push([thisIndentation, true]);
        this.shouldTrackNextIndentation = false;
        this.yylloc.first_column = this.yylloc.last_column;
        this.yylloc.last_column += thisIndentation;
        this.yytext = '';
        return 'Indent';
      } else if (thisIndentation < this.getLastRecordedIndentation()[0]) {
        const indent = this.indentation.pop();

        if (indent[1]) {
          this.yytext = '';
          this.previousLevelOfIndentation = this.getLastRecordedIndentation()[0];
          return 'Dedent';
        }

        this.lexNextTokenOnCurrentLine();
      }

      if (thisIndentation === this.previousLevelOfIndentation && this.yylloc.last_column === 1) {
        this.yylloc.last_column += thisIndentation;
      }

      const rules = this.getState().transitions;

      for (let i = 0, len = rules.length; i < len; i += 1) {
        const rule = rules[i];
        const match = this.getCurrentLine().substring(this.yylloc.last_column - 1).match(rule.regex); // Only accept valid matches that are at the beginning of the text

        if (match !== null && match.index === 0) {
          // Take the matched text off the front of this.text
          const matchedText = match[0]; // Tell the parser what the text for this token is

          this.yytext = this.getCurrentLine().substr(this.yylloc.last_column - 1, matchedText.length);

          if (rule.token === 'String') {
            // If that's a String, we're removing the quotes and
            // un-escaping double-escaped characters.
            this.yytext = this.yytext.substring(1, this.yytext.length - 1).replace(/\\/g, '');
          } // Update our line and column info


          this.yylloc.first_column = this.yylloc.last_column;
          this.yylloc.last_column += matchedText.length; // If the rule points to a new state, change it now

          if (rule.state) {
            this.setState(rule.state);

            if (this.shouldTrackNextIndentation) {
              if (this.getLastRecordedIndentation()[0] < thisIndentation) {
                this.indentation.push([thisIndentation, false]);
              }
            }
          }

          const nextState = this.states[rule.state];
          const hasText = !nextState || nextState.transitions.find(transition => {
            return transition.token === 'Text';
          }); // inline expressions and escaped characters interrupt text
          // but should still preserve surrounding whitespace.

          if (rule.token !== 'EndInlineExp' && rule.token !== 'EscapedCharacter' || !hasText // we never want leading whitespace if not in text-supporting state
          ) {
            // Remove leading whitespace characters
            const spaceMatch = this.getCurrentLine().substring(this.yylloc.last_column - 1).match(/^\s*/);

            if (spaceMatch[0]) {
              this.yylloc.last_column += spaceMatch[0].length;
            }
          }

          return rule.token;
        }
      }

      throw new Error(`Invalid syntax in: ${this.getCurrentLine()}`);
    } // /////////////// Getters & Setters

    /**
     * setState - set the current state of the lexer.
     *
     * @param  {string} state name of the state
     */


    setState(state) {
      if (this.states[state] === undefined) {
        throw new Error(`Cannot set the unknown state [${state}]`);
      }

      this.state = state;

      if (this.getState().isTrackingNextIndentation) {
        this.shouldTrackNextIndentation = true;
      }
    }
    /**
     * setInput - Set the text on which perform lexical analysis.
     *
     * @param  {string} text the text to lex.
     */


    setInput(text) {
      // Delete carriage return while keeping a similar semantic.
      this.originalText = text.replace(/(\r\n)/g, '\n').replace(/\r/g, '\n').replace(/[\n\r]+$/, ''); // Transform the input into an array of lines.

      this.lines = this.originalText.split('\n');
      this.reset();
    }
    /**
     * getState - Returns the full current state object (LexerState),
     * rather than its identifier.
     *
     * @return {Object}  the state object.
     */


    getState() {
      return this.states[this.state];
    }

    getCurrentLine() {
      return this.lines[this.yylineno - 1];
    }

    getCurrentLineIndentation() {
      const match = this.getCurrentLine().match(/^(\s*)/g);
      return match[0].length;
    }

    getLastRecordedIndentation() {
      if (this.indentation.length === 0) {
        return [0, false];
      }

      return this.indentation[this.indentation.length - 1];
    } // /////////////// Booleans tests

    /**
     * @return {boolean}  `true` when yylloc indicates that the end was reached.
     */


    isAtTheEndOfText() {
      return this.isAtTheEndOfLine() && this.yylloc.first_line >= this.lines.length;
    }
    /**
     * @return {boolean}  `true` when yylloc indicates that the end of the line was reached.
     */


    isAtTheEndOfLine() {
      return this.yylloc.last_column > this.getCurrentLine().length;
    }

  }

  var o = function (k, v, o, l) {
    for (o = o || {}, l = k.length; l--; o[k[l]] = v);

    return o;
  },
      $V0 = [1, 19],
      $V1 = [1, 20],
      $V2 = [1, 12],
      $V3 = [1, 18],
      $V4 = [1, 17],
      $V5 = [5, 18, 19, 24, 35, 37, 80],
      $V6 = [1, 24],
      $V7 = [1, 25],
      $V8 = [1, 27],
      $V9 = [1, 28],
      $Va = [5, 14, 16, 22, 24, 35, 37],
      $Vb = [5, 14, 16, 18, 19, 22, 24, 35, 37, 80],
      $Vc = [1, 31],
      $Vd = [1, 32],
      $Ve = [1, 35],
      $Vf = [1, 36],
      $Vg = [1, 37],
      $Vh = [1, 38],
      $Vi = [5, 14, 16, 18, 22, 24, 35, 37, 80],
      $Vj = [1, 42],
      $Vk = [1, 52],
      $Vl = [1, 51],
      $Vm = [1, 46],
      $Vn = [1, 47],
      $Vo = [1, 48],
      $Vp = [1, 53],
      $Vq = [1, 54],
      $Vr = [1, 55],
      $Vs = [1, 56],
      $Vt = [1, 57],
      $Vu = [5, 16, 18, 19, 24, 35, 37, 80],
      $Vv = [1, 68],
      $Vw = [1, 79],
      $Vx = [1, 80],
      $Vy = [1, 81],
      $Vz = [1, 82],
      $VA = [1, 83],
      $VB = [1, 84],
      $VC = [1, 85],
      $VD = [1, 86],
      $VE = [1, 87],
      $VF = [1, 88],
      $VG = [1, 89],
      $VH = [1, 90],
      $VI = [1, 91],
      $VJ = [1, 92],
      $VK = [1, 93],
      $VL = [27, 50, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
      $VM = [27, 38, 50, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81],
      $VN = [27, 38, 75, 76, 77, 78, 79, 80],
      $VO = [27, 50, 55, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
      $VP = [27, 50, 55, 74, 81],
      $VQ = [1, 132],
      $VR = [1, 133],
      $VS = [27, 50, 55, 57, 58, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
      $VT = [27, 50, 55, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 81],
      $VU = [55, 74],
      $VV = [16, 18, 19, 24, 35, 80];

  var parser = {
    trace: function trace() {},
    yy: {},
    symbols_: {
      "error": 2,
      "node": 3,
      "statements": 4,
      "EndOfInput": 5,
      "conditionalBlock": 6,
      "statement": 7,
      "text": 8,
      "shortcut": 9,
      "genericCommand": 10,
      "assignmentCommand": 11,
      "jumpCommand": 12,
      "stopCommand": 13,
      "Comment": 14,
      "hashtags": 15,
      "EndOfLine": 16,
      "escapedTextRaw": 17,
      "Text": 18,
      "EscapedCharacter": 19,
      "escapedText": 20,
      "inlineExpression": 21,
      "Hashtag": 22,
      "conditional": 23,
      "BeginCommand": 24,
      "If": 25,
      "expression": 26,
      "EndCommand": 27,
      "EndIf": 28,
      "additionalConditionalBlocks": 29,
      "else": 30,
      "Else": 31,
      "elseif": 32,
      "ElseIf": 33,
      "shortcutOption": 34,
      "ShortcutOption": 35,
      "Indent": 36,
      "Dedent": 37,
      "Identifier": 38,
      "genericCommandArguments": 39,
      "genericCommandArgument": 40,
      "literal": 41,
      "Jump": 42,
      "Stop": 43,
      "setCommandInner": 44,
      "declareCommandInner": 45,
      "Set": 46,
      "Variable": 47,
      "EqualToOrAssign": 48,
      "Declare": 49,
      "As": 50,
      "ExplicitType": 51,
      "functionArgument": 52,
      "functionCall": 53,
      "LeftParen": 54,
      "RightParen": 55,
      "UnaryMinus": 56,
      "Add": 57,
      "Minus": 58,
      "Exponent": 59,
      "Multiply": 60,
      "Divide": 61,
      "Modulo": 62,
      "Not": 63,
      "Or": 64,
      "And": 65,
      "Xor": 66,
      "EqualTo": 67,
      "NotEqualTo": 68,
      "GreaterThan": 69,
      "GreaterThanOrEqualTo": 70,
      "LessThan": 71,
      "LessThanOrEqualTo": 72,
      "parenExpressionArgs": 73,
      "Comma": 74,
      "True": 75,
      "False": 76,
      "Number": 77,
      "String": 78,
      "Null": 79,
      "BeginInlineExp": 80,
      "EndInlineExp": 81,
      "$accept": 0,
      "$end": 1
    },
    terminals_: {
      2: "error",
      5: "EndOfInput",
      14: "Comment",
      16: "EndOfLine",
      18: "Text",
      19: "EscapedCharacter",
      22: "Hashtag",
      24: "BeginCommand",
      25: "If",
      27: "EndCommand",
      28: "EndIf",
      31: "Else",
      33: "ElseIf",
      35: "ShortcutOption",
      36: "Indent",
      37: "Dedent",
      38: "Identifier",
      42: "Jump",
      43: "Stop",
      46: "Set",
      47: "Variable",
      48: "EqualToOrAssign",
      49: "Declare",
      50: "As",
      51: "ExplicitType",
      54: "LeftParen",
      55: "RightParen",
      56: "UnaryMinus",
      57: "Add",
      58: "Minus",
      59: "Exponent",
      60: "Multiply",
      61: "Divide",
      62: "Modulo",
      63: "Not",
      64: "Or",
      65: "And",
      66: "Xor",
      67: "EqualTo",
      68: "NotEqualTo",
      69: "GreaterThan",
      70: "GreaterThanOrEqualTo",
      71: "LessThan",
      72: "LessThanOrEqualTo",
      74: "Comma",
      75: "True",
      76: "False",
      77: "Number",
      78: "String",
      79: "Null",
      80: "BeginInlineExp",
      81: "EndInlineExp"
    },
    productions_: [0, [3, 2], [4, 1], [4, 2], [4, 1], [4, 2], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 2], [7, 2], [7, 2], [17, 1], [17, 1], [17, 2], [17, 2], [20, 1], [8, 1], [8, 1], [8, 2], [15, 1], [15, 2], [23, 4], [6, 6], [6, 4], [6, 2], [30, 3], [30, 2], [32, 4], [32, 2], [29, 5], [29, 5], [29, 3], [34, 2], [34, 3], [34, 2], [34, 2], [34, 3], [34, 2], [9, 1], [9, 5], [10, 3], [10, 4], [39, 1], [39, 2], [40, 1], [40, 1], [40, 1], [12, 4], [12, 4], [13, 3], [11, 3], [11, 3], [44, 4], [45, 4], [45, 6], [26, 1], [26, 1], [26, 3], [26, 2], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 2], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [26, 3], [53, 3], [53, 4], [73, 3], [73, 1], [52, 1], [52, 1], [52, 1], [41, 1], [41, 1], [41, 1], [41, 1], [41, 1], [21, 3]],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate
    /* action[1] */
    , $$
    /* vstack */
    , _$
    /* lstack */
    ) {
      /* this == yyval */
      var $0 = $$.length - 1;

      switch (yystate) {
        case 1:
          return $$[$0 - 1].flat();

        case 2:
        case 4:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 21:
        case 46:
        case 82:
          this.$ = [$$[$0]];
          break;

        case 3:
          this.$ = $$[$0 - 1].concat($$[$0]);
          break;

        case 5:
        case 47:
          this.$ = $$[$0 - 1].concat([$$[$0]]);
          break;

        case 6:
        case 60:
          this.$ = $$[$0];
          break;

        case 12:
        case 14:
        case 28:
        case 31:
        case 32:
        case 54:
        case 61:
          this.$ = $$[$0 - 1];
          break;

        case 13:
          this.$ = $$[$0 - 1].map(s => Object.assign(s, {
            hashtags: $$[$0]
          }));
          break;

        case 15:
        case 48:
        case 49:
        case 59:
        case 83:
        case 84:
          this.$ = $$[$0];
          break;

        case 16:
          this.$ = $$[$0].substring(1);
          break;

        case 17:
          this.$ = $$[$0 - 1].concat($$[$0].substring(1));
          break;

        case 18:
          this.$ = $$[$0 - 1].substring(1).concat($$[$0]);
          break;

        case 19:
          this.$ = new yy.TextNode($$[$0], this._$);
          break;

        case 20:
          this.$ = [$$[$0]];
          break;

        case 22:
          this.$ = $$[$0 - 1].concat($$[$0]);
          break;

        case 23:
          this.$ = [$$[$0].substring(1)];
          break;

        case 24:
          this.$ = [$$[$0 - 1].substring(1)].concat($$[$0]);
          break;

        case 25:
        case 39:
        case 41:
          this.$ = $$[$0 - 1];
          break;

        case 26:
          this.$ = new yy.IfNode($$[$0 - 5], $$[$0 - 3].flat());
          break;

        case 27:
          this.$ = new yy.IfElseNode($$[$0 - 3], $$[$0 - 1].flat(), $$[$0]);
          break;

        case 29:
        case 30:
          this.$ = undefined;
          break;

        case 33:
          this.$ = new yy.ElseNode($$[$0 - 3].flat());
          break;

        case 34:
          this.$ = new yy.ElseIfNode($$[$0 - 4], $$[$0 - 3].flat());
          break;

        case 35:
          this.$ = new yy.ElseIfNode($$[$0 - 2], $$[$0 - 1].flat(), $$[$0]);
          break;

        case 36:
          this.$ = {
            text: $$[$0]
          };
          break;

        case 37:
          this.$ = {
            text: $$[$0 - 1],
            conditional: $$[$0]
          };
          break;

        case 38:
          this.$ = { ...$$[$0 - 1],
            hashtags: $$[$0]
          };
          break;

        case 40:
          this.$ = { ...$$[$0 - 2],
            hashtags: $$[$0 - 1]
          };
          break;

        case 42:
          this.$ = new yy.DialogShortcutNode($$[$0].text, undefined, this._$, $$[$0].hashtags, $$[$0].conditional);
          break;

        case 43:
          this.$ = new yy.DialogShortcutNode($$[$0 - 4].text, $$[$0 - 1].flat(), this._$, $$[$0 - 4].hashtags, $$[$0 - 4].conditional);
          break;

        case 44:
          this.$ = new yy.FunctionResultNode($$[$0 - 1], [], this._$);
          break;

        case 45:
          this.$ = new yy.FunctionResultNode($$[$0 - 2], $$[$0 - 1], this._$);
          break;

        case 50:
          this.$ = new yy.TextNode($$[$0]);
          break;

        case 51:
        case 52:
          this.$ = new yy.JumpNode($$[$0 - 1]);
          break;

        case 53:
          this.$ = new yy.StopNode();
          break;

        case 55:
          this.$ = null;
          break;

        case 56:
          this.$ = new yy.SetVariableEqualToNode($$[$0 - 2].substring(1), $$[$0]);
          break;

        case 57:
          this.$ = null;
          yy.registerDeclaration($$[$0 - 2].substring(1), $$[$0]);
          break;

        case 58:
          this.$ = null;
          yy.registerDeclaration($$[$0 - 4].substring(1), $$[$0 - 2], $$[$0]);
          break;

        case 62:
          this.$ = new yy.UnaryMinusExpressionNode($$[$0]);
          break;

        case 63:
          this.$ = new yy.ArithmeticExpressionAddNode($$[$0 - 2], $$[$0]);
          break;

        case 64:
          this.$ = new yy.ArithmeticExpressionMinusNode($$[$0 - 2], $$[$0]);
          break;

        case 65:
          this.$ = new yy.ArithmeticExpressionExponentNode($$[$0 - 2], $$[$0]);
          break;

        case 66:
          this.$ = new yy.ArithmeticExpressionMultiplyNode($$[$0 - 2], $$[$0]);
          break;

        case 67:
          this.$ = new yy.ArithmeticExpressionDivideNode($$[$0 - 2], $$[$0]);
          break;

        case 68:
          this.$ = new yy.ArithmeticExpressionModuloNode($$[$0 - 2], $$[$0]);
          break;

        case 69:
          this.$ = new yy.NegatedBooleanExpressionNode($$[$0]);
          break;

        case 70:
          this.$ = new yy.BooleanOrExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 71:
          this.$ = new yy.BooleanAndExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 72:
          this.$ = new yy.BooleanXorExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 73:
          this.$ = new yy.EqualToExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 74:
          this.$ = new yy.NotEqualToExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 75:
          this.$ = new yy.GreaterThanExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 76:
          this.$ = new yy.GreaterThanOrEqualToExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 77:
          this.$ = new yy.LessThanExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 78:
          this.$ = new yy.LessThanOrEqualToExpressionNode($$[$0 - 2], $$[$0]);
          break;

        case 79:
          this.$ = new yy.FunctionResultNode($$[$0 - 2], []);
          break;

        case 80:
          this.$ = new yy.FunctionResultNode($$[$0 - 3], $$[$0 - 1]);
          break;

        case 81:
          this.$ = $$[$0 - 2].concat([$$[$0]]);
          break;

        case 85:
          this.$ = new yy.VariableNode($$[$0].substring(1));
          break;

        case 86:
        case 87:
          this.$ = new yy.BooleanLiteralNode($$[$0]);
          break;

        case 88:
          this.$ = new yy.NumericLiteralNode($$[$0]);
          break;

        case 89:
          this.$ = new yy.StringLiteralNode($$[$0]);
          break;

        case 90:
          this.$ = new yy.NullLiteralNode($$[$0]);
          break;

        case 91:
          this.$ = new yy.InlineExpressionNode($$[$0 - 1], this._$);
          break;
      }
    },
    table: [{
      3: 1,
      4: 2,
      6: 3,
      7: 4,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      80: $V4
    }, {
      1: [3]
    }, {
      5: [1, 21],
      6: 22,
      7: 23,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      80: $V4
    }, o($V5, [2, 2], {
      16: $V6
    }), o($V5, [2, 4], {
      15: 26,
      14: $V7,
      16: $V8,
      22: $V9
    }), {
      16: [1, 29]
    }, o($Va, [2, 6], {
      20: 13,
      21: 14,
      17: 16,
      8: 30,
      18: $V0,
      19: $V1,
      80: $V4
    }), o($Vb, [2, 7]), o($Vb, [2, 8]), o($Vb, [2, 9]), o($Vb, [2, 10]), o($Vb, [2, 11]), {
      25: $Vc,
      38: $Vd,
      42: $Ve,
      43: $Vf,
      44: 33,
      45: 34,
      46: $Vg,
      49: $Vh
    }, o($Vb, [2, 20]), o($Vb, [2, 21]), o($V5, [2, 42], {
      15: 40,
      14: [1, 41],
      16: [1, 39],
      22: $V9
    }), o($Vi, [2, 19], {
      19: $Vj
    }), {
      21: 49,
      26: 43,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      8: 58,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      80: $V4
    }, o($Vb, [2, 15]), o([5, 14, 16, 22, 24, 35, 37, 80], [2, 16], {
      17: 59,
      18: $V0,
      19: $V1
    }), {
      1: [2, 1]
    }, o($V5, [2, 3], {
      16: $V6
    }), o($V5, [2, 5], {
      15: 26,
      14: $V7,
      16: $V8,
      22: $V9
    }), o($Vu, [2, 28]), o($Vb, [2, 12]), o($Vb, [2, 13]), o($Vb, [2, 14]), o([5, 14, 16, 18, 19, 24, 35, 37, 80], [2, 23], {
      15: 60,
      22: $V9
    }), {
      4: 61,
      6: 3,
      7: 4,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      80: $V4
    }, o($Va, [2, 22], {
      20: 13,
      21: 14,
      17: 16,
      8: 30,
      18: $V0,
      19: $V1,
      80: $V4
    }), {
      21: 49,
      26: 62,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 66,
      27: [1, 63],
      38: $Vv,
      39: 64,
      40: 65,
      41: 67,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      27: [1, 69]
    }, {
      27: [1, 70]
    }, {
      21: 72,
      38: [1, 71],
      80: $V4
    }, {
      27: [1, 73]
    }, {
      47: [1, 74]
    }, {
      47: [1, 75]
    }, o($Vb, [2, 41], {
      36: [1, 76]
    }), o([5, 16, 18, 19, 22, 24, 35, 37, 80], [2, 38], {
      14: [1, 77]
    }), o($Vb, [2, 39]), o($Vb, [2, 17]), {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK,
      81: [1, 78]
    }, o($VL, [2, 59]), o($VL, [2, 60]), {
      21: 49,
      26: 94,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 95,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 96,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, o($VL, [2, 83]), o($VL, [2, 84]), o($VL, [2, 85]), {
      54: [1, 97]
    }, o($VM, [2, 86]), o($VM, [2, 87]), o($VM, [2, 88]), o($VM, [2, 89]), o($VM, [2, 90]), o([5, 14, 16, 22, 35, 37], [2, 36], {
      20: 13,
      21: 14,
      17: 16,
      8: 30,
      23: 98,
      18: $V0,
      19: $V1,
      24: [1, 99],
      80: $V4
    }), o($Vi, [2, 18], {
      19: $Vj
    }), o($Vb, [2, 24]), {
      6: 22,
      7: 23,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: [1, 100],
      29: 101,
      30: 102,
      32: 103,
      34: 15,
      35: $V3,
      80: $V4
    }, {
      27: [1, 104],
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }, o($Vb, [2, 44]), {
      21: 66,
      27: [1, 105],
      38: $Vv,
      40: 106,
      41: 67,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, o($VN, [2, 46]), o($VN, [2, 48]), o($VN, [2, 49]), o($VN, [2, 50]), o($Vb, [2, 54]), o($Vb, [2, 55]), {
      27: [1, 107]
    }, {
      27: [1, 108]
    }, o($Vb, [2, 53]), {
      48: [1, 109]
    }, {
      48: [1, 110]
    }, {
      4: 111,
      6: 3,
      7: 4,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      80: $V4
    }, o($Vb, [2, 40]), o([5, 14, 16, 18, 19, 22, 24, 27, 35, 37, 38, 50, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81], [2, 91]), {
      21: 49,
      26: 112,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 113,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 114,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 115,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 116,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 117,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 118,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 119,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 120,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 121,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 122,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 123,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 124,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 125,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 126,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      55: [1, 127],
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }, o($VO, [2, 62], {
      62: $VB
    }), o($VP, [2, 69], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), {
      21: 49,
      26: 130,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      55: [1, 128],
      56: $Vn,
      63: $Vo,
      73: 129,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, o($Vb, [2, 37]), {
      25: $Vc
    }, {
      25: $Vc,
      28: [1, 131],
      31: $VQ,
      33: $VR,
      38: $Vd,
      42: $Ve,
      43: $Vf,
      44: 33,
      45: 34,
      46: $Vg,
      49: $Vh
    }, o($Vu, [2, 27]), {
      4: 134,
      6: 3,
      7: 4,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      16: [1, 135],
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      80: $V4
    }, {
      4: 136,
      6: 3,
      7: 4,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      16: [1, 137],
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      80: $V4
    }, o($Vb, [2, 25]), o($Vb, [2, 45]), o($VN, [2, 47]), o($Vb, [2, 51]), o($Vb, [2, 52]), {
      21: 49,
      26: 138,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      21: 49,
      26: 139,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      6: 22,
      7: 23,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: $V2,
      34: 15,
      35: $V3,
      37: [1, 140],
      80: $V4
    }, o($VS, [2, 63], {
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VS, [2, 64], {
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VO, [2, 65], {
      62: $VB
    }), o($VO, [2, 66], {
      62: $VB
    }), o($VO, [2, 67], {
      62: $VB
    }), o($VP, [2, 68], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), o([27, 50, 55, 64, 74, 81], [2, 70], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), o([27, 50, 55, 64, 65, 74, 81], [2, 71], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), o([27, 50, 55, 64, 65, 66, 74, 81], [2, 72], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), o($VT, [2, 73], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VT, [2, 74], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VT, [2, 75], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VT, [2, 76], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VT, [2, 77], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VT, [2, 78], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB
    }), o($VL, [2, 61]), o($VL, [2, 79]), {
      55: [1, 141],
      74: [1, 142]
    }, o($VU, [2, 82], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), {
      27: [1, 143]
    }, {
      27: [1, 144]
    }, {
      21: 49,
      26: 145,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, {
      6: 22,
      7: 23,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: [1, 146],
      34: 15,
      35: $V3,
      80: $V4
    }, o($VV, [2, 30]), {
      6: 22,
      7: 23,
      8: 6,
      9: 7,
      10: 8,
      11: 9,
      12: 10,
      13: 11,
      17: 16,
      18: $V0,
      19: $V1,
      20: 13,
      21: 14,
      23: 5,
      24: [1, 147],
      29: 148,
      30: 102,
      32: 103,
      34: 15,
      35: $V3,
      80: $V4
    }, o($VV, [2, 32]), {
      27: [2, 56],
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }, {
      27: [2, 57],
      50: [1, 149],
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }, o($Vb, [2, 43]), o($VL, [2, 80]), {
      21: 49,
      26: 150,
      38: $Vk,
      41: 50,
      47: $Vl,
      52: 44,
      53: 45,
      54: $Vm,
      56: $Vn,
      63: $Vo,
      75: $Vp,
      76: $Vq,
      77: $Vr,
      78: $Vs,
      79: $Vt,
      80: $V4
    }, o($Vu, [2, 26]), o($VV, [2, 29]), {
      27: [1, 151],
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }, {
      25: $Vc,
      28: [1, 152],
      38: $Vd,
      42: $Ve,
      43: $Vf,
      44: 33,
      45: 34,
      46: $Vg,
      49: $Vh
    }, {
      25: $Vc,
      28: [1, 153],
      31: $VQ,
      33: $VR,
      38: $Vd,
      42: $Ve,
      43: $Vf,
      44: 33,
      45: 34,
      46: $Vg,
      49: $Vh
    }, o($Vu, [2, 35]), {
      51: [1, 154]
    }, o($VU, [2, 81], {
      57: $Vw,
      58: $Vx,
      59: $Vy,
      60: $Vz,
      61: $VA,
      62: $VB,
      64: $VC,
      65: $VD,
      66: $VE,
      67: $VF,
      68: $VG,
      69: $VH,
      70: $VI,
      71: $VJ,
      72: $VK
    }), o($VV, [2, 31]), {
      27: [1, 155]
    }, {
      27: [1, 156]
    }, {
      27: [2, 58]
    }, o($Vu, [2, 33]), o($Vu, [2, 34])],
    defaultActions: {
      21: [2, 1],
      154: [2, 58]
    },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    },
    parse: function parse(input) {
      var self = this,
          stack = [0],
          vstack = [null],
          lstack = [],
          table = this.table,
          yytext = '',
          yylineno = 0,
          yyleng = 0,
          TERROR = 2,
          EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer = Object.create(this.lexer);
      var sharedState = {
        yy: {}
      };

      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }

      lexer.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer;
      sharedState.yy.parser = this;

      if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
      }

      var yyloc = lexer.yylloc;
      lstack.push(yyloc);
      var ranges = lexer.options && lexer.options.ranges;

      if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }

      var lex = function () {
        var token;
        token = lexer.lex() || EOF;

        if (typeof token !== 'number') {
          token = self.symbols_[token] || token;
        }

        return token;
      };

      var symbol,
          state,
          action,
          r,
          yyval = {},
          p,
          len,
          newState,
          expected;

      while (true) {
        state = stack[stack.length - 1];

        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == 'undefined') {
            symbol = lex();
          }

          action = table[state] && table[state][symbol];
        }

        if (typeof action === 'undefined' || !action.length || !action[0]) {
          var errStr = '';
          expected = [];

          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push('\'' + this.terminals_[p] + '\'');
            }
          }

          if (lexer.showPosition) {
            errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
          } else {
            errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
          }

          this.parseError(errStr, {
            text: lexer.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer.yylineno,
            loc: yyloc,
            expected: expected
          });
        }

        if (action[0] instanceof Array && action.length > 1) {
          throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }

        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;

            {
              yyleng = lexer.yyleng;
              yytext = lexer.yytext;
              yylineno = lexer.yylineno;
              yyloc = lexer.yylloc;
            }

            break;

          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };

            if (ranges) {
              yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }

            r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

            if (typeof r !== 'undefined') {
              return r;
            }

            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }

            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;

          case 3:
            return true;
        }
      }

      return true;
    }
  };

  function Parser() {
    this.yy = {};
  }
  Parser.prototype = parser;
  parser.Parser = Parser;

  parser.lexer = new Lexer();
  parser.yy = types;
  parser.yy.declarations = {};

  parser.yy.registerDeclaration = function registerDeclaration(variableName, expression, explicitType) {
    if (!this.areDeclarationsHandled) {
      if (this.declarations[variableName]) {
        throw new Error(`Duplicate declaration found for variable: ${variableName}`);
      }

      this.declarations[variableName] = {
        variableName,
        expression,
        explicitType
      };
    }
  };

  class Result {}

  class TextResult extends Result {
    /**
     * Create a text display result
     * @param {string} [text] text to be displayed
     * @param {string[]} [hashtags] the hashtags for the line
     * @param {object} [metadata] the parent yarn node
     */
    constructor(text, hashtags, metadata) {
      super();
      this.text = text;
      this.hashtags = hashtags;
      this.metadata = metadata;
    }

  }

  class CommandResult extends Result {
    /**
     * Return a command string
     * @param {string} [name] the function name being called
     * @param {[]} [args] the array of arguments for the function
     * @param {string[]} [hashtags] the hashtags for the line
     * @param {object} [metadata] the parent yarn node
     */
    constructor(name, args, hashtags, metadata) {
      super();
      this.name = name;
      this.args = args;
      this.hashtags = hashtags;
      this.metadata = metadata;
    }

  }

  class OptionResult extends Result {
    /**
     * Strip down Conditional option for presentation
     * @param {string} [text] option text to display
     * @param {boolean} [isAvailable] whether option is available
     * @param {string[]} [hashtags] the hashtags for the line
     * @param {object} [metadata] the parent yarn node
     */
    constructor(text, isAvailable = true, hashtags = [], metadata) {
      super();
      this.text = text;
      this.isAvailable = isAvailable;
      this.hashtags = hashtags;
      this.metadata = metadata;
    }

  }

  class OptionsResult extends Result {
    /**
     * Create a selectable list of options from the given list of text
     * @param {OptionResult[]} [options] list of the text of options to be shown
     * @param {object} [metadata] the parent yarn node
     */
    constructor(options, metadata) {
      super();
      this.options = options.map(s => {
        return new OptionResult(s.text, s.isAvailable, s.hashtags);
      });
      this.metadata = metadata;
    }

    select(index = -1) {
      if (index < 0 || index >= this.options.length) {
        throw new Error(`Cannot select option #${index}, there are ${this.options.length} options`);
      }

      this.selected = index;
    }

  }

  var results = {
    Result,
    TextResult,
    CommandResult,
    OptionsResult
  };

  class DefaultVariableStorage {
    constructor() {
      this.data = {};
    }

    set(name, value) {
      this.data[name] = value;
    } // Called when a variable is being evaluated.


    get(name) {
      return this.data[name];
    }

  }

  var defaultVariableStorage = DefaultVariableStorage;

  /* eslint-disable */
  /*
  Yoinked from YarnEditor source and modified to limit size and scope:

  https://github.com/YarnSpinnerTool/YarnEditor/blob/master/src/js/classes/data.js

  Including as a dependency would be large and subject to breakage, so we adapt it instead.

  I guess this counts as a "substantial portion" (?), so:

  --------------


  Copyright (c) 2015 Infinite Ammo Inc. and Yarn Contributors

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

  /* eslint-enable */

  var convertYarn = function convertYarn(content) {
    const objects = [];
    const lines = content.split(/\r?\n+/).filter(line => {
      return !line.match(/^\s*$/);
    });
    let obj = null;
    let readingBody = false;
    let filetags;
    let i = 0;

    while (lines[i][0] === '#' || !lines[i].trim()) {
      if (!filetags) filetags = [];
      filetags.push(lines[i].substr(1).trim());
      i += 1;
    }

    for (; i < lines.length; i += 1) {
      if (lines[i].trim() === '===') {
        readingBody = false;
        if (filetags) obj.filetags = filetags;
        objects.push(obj);
        obj = null;
      } else if (readingBody) {
        obj.body += `${lines[i]}\n`;
      } else if (lines[i].trim() === '---') {
        readingBody = true;
        obj.body = '';
      } else if (lines[i].indexOf(':') > -1) {
        const [key, value] = lines[i].split(':');
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();

        if (trimmedKey !== 'body') {
          if (obj == null) obj = {};

          if (obj[trimmedKey]) {
            throw new Error(`Duplicate tag on node: ${trimmedKey}`);
          }

          obj[trimmedKey] = trimmedValue;
        }
      }
    }

    return objects;
  };

  const nodeTypes = types.types;

  class Runner {
    constructor() {
      this.yarnNodes = {};
      this.variables = new defaultVariableStorage();
      this.functions = {};
      this.visited = {}; // Which nodes have been visited

      this.registerFunction('visited', nodeTitle => {
        return !!this.visited[nodeTitle];
      });
    }
    /**
     * Loads the yarn node data into this.nodes
     * @param {any[]} yarn dialogue as string or array
     */


    load(data) {
      let nodes = data;

      if (typeof data === 'string') {
        nodes = convertYarn(data);
      }

      nodes.forEach(node => {
        if (!node.title) {
          throw new Error(`Node needs a title: ${JSON.stringify(node)}`);
        } else if (node.title.split('.').length > 1) {
          throw new Error(`Node title cannot contain a dot: ${node.title}`);
        }

        if (!node.body) {
          throw new Error(`Node needs a body: ${JSON.stringify(node)}`);
        }

        if (this.yarnNodes[node.title]) {
          throw new Error(`Duplicate node title: ${node.title}`);
        }

        this.yarnNodes[node.title] = node;
      });
      parser.yy.areDeclarationsHandled = false;
      parser.yy.declarations = {};
      this.handleDeclarations(nodes);
      parser.yy.areDeclarationsHandled = true;
    }
    /**
     * Set a new variable storage object
     * This must simply contain a 'get(name)' and 'set(name, value)' function
     *
     * Calling this function will clear any existing variable's values
     */


    setVariableStorage(storage) {
      if (typeof storage.set !== 'function' || typeof storage.get !== 'function') {
        throw new Error('Variable Storage object must contain both a "set" and "get" function');
      }

      this.variables = storage;
    }
    /**
     * Scans for <<declare>> commands and sets initial variable values
     * @param {any[]} yarn dialogue as string or array
     */


    handleDeclarations(nodes) {
      const exampleValues = {
        Number: 0,
        String: '',
        Boolean: false
      };
      const allLines = nodes.reduce((acc, node) => {
        const nodeLines = node.body.split(/\r?\n+/);
        return [...acc, ...nodeLines];
      }, []);
      const declareLines = allLines.reduce((acc, line) => {
        const match = line.match(/^<<declare .+>>/);
        return match ? [...acc, line] : acc;
      }, []);

      if (declareLines.length) {
        parser.parse(declareLines.join('\n'));
      }

      Object.entries(parser.yy.declarations).forEach(([variableName, {
        expression,
        explicitType
      }]) => {
        const value = this.evaluateExpressionOrLiteral(expression);

        if (explicitType && typeof value !== typeof exampleValues[explicitType]) {
          throw new Error(`Cannot declare value ${value} as type ${explicitType} for variable ${variableName}`);
        }

        if (!this.variables.get(variableName)) {
          this.variables.set(variableName, value);
        }
      });
    }

    registerFunction(name, func) {
      if (typeof func !== 'function') {
        throw new Error('Registered function must be...well...a function');
      }

      this.functions[name] = func;
    }
    /**
     * Generator to return each sequential dialog result starting from the given node
     * @param {string} [startNode] - The name of the yarn node to begin at
     */


    *run(startNode) {
      const yarnNode = this.yarnNodes[startNode];

      if (yarnNode === undefined) {
        throw new Error(`Node "${startNode}" does not exist`);
      }

      this.visited[startNode] = true; // Parse the entire node

      const parserNodes = Array.from(parser.parse(yarnNode.body));
      const metadata = { ...yarnNode
      };
      delete metadata.body;
      return yield* this.evalNodes(parserNodes, metadata, true);
    }
    /**
     * Evaluate a list of parser nodes, yielding the ones that need to be seen by
     * the user. Calls itself recursively if that is required by nested nodes
     * @param {Node[]} nodes
     * @param {YarnNode[]} metadata
     * @param {boolean} isRoot - did we get here from run()
     */


    *evalNodes(nodes, metadata, isRoot) {
      let shortcutNodes = [];
      let prevnode = null;
      let textRun = '';
      const filteredNodes = nodes.filter(Boolean); // Yield the individual user-visible results
      // Need to accumulate all adjacent selectables
      // into one list (hence some of the weirdness here)

      for (let nodeIdx = 0; nodeIdx < filteredNodes.length; nodeIdx += 1) {
        const node = filteredNodes[nodeIdx];
        const nextNode = filteredNodes[nodeIdx + 1];

        if (prevnode instanceof nodeTypes.Shortcut && !(node instanceof nodeTypes.Shortcut)) {
          // Last shortcut in the series, so yield the shortcuts.
          const result = yield* this.handleShortcuts(shortcutNodes, metadata);

          if (result && result.stop) {
            return result;
          }

          shortcutNodes = [];
        } // Text and the output of Inline Expressions
        // are combined to deliver a TextNode.


        if (node instanceof nodeTypes.Text || node instanceof nodeTypes.Expression) {
          textRun += this.evaluateExpressionOrLiteral(node).toString();

          if (nextNode && node.lineNum === nextNode.lineNum && (nextNode instanceof nodeTypes.Text || nextNode instanceof nodeTypes.Expression)) ; else {
            yield new results.TextResult(textRun, node.hashtags, metadata);
            textRun = '';
          } // Other nodes are more straightforward:

        } else if (node instanceof nodeTypes.Shortcut) {
          shortcutNodes.push(node);
        } else if (node instanceof nodeTypes.Assignment) {
          this.evaluateAssignment(node);
        } else if (node instanceof nodeTypes.Conditional) {
          // Get the results of the conditional
          const evalResult = this.evaluateConditional(node);

          if (evalResult) {
            // Run the remaining results
            const result = yield* this.evalNodes(evalResult, metadata);

            if (result && result.stop) {
              return result;
            }
          }
        } else {
          // FunctionCall
          if (node.type === 'JumpNode') {
            yield* this.run(node.destination); // ignore the rest of this outer loop and
            // tell parent loops to ignore following nodes

            return isRoot ? undefined : {
              stop: true
            };
          }

          if (node.type === 'StopNode') {
            // ignore the rest of this outer loop and
            // tell parent loops to ignore following nodes
            return isRoot ? undefined : {
              stop: true
            };
          }

          const funcArgs = node.args.map(this.evaluateExpressionOrLiteral, this);
          yield new results.CommandResult(node.functionName, funcArgs, node.hashtags, metadata);
        }

        prevnode = node;
      } // The last node might be a shortcut


      if (shortcutNodes.length > 0) {
        return yield* this.handleShortcuts(shortcutNodes, metadata);
      }

      return undefined;
    }
    /**
     * yield a shortcut result then handle the subsequent selection
     * @param {any[]} selections
     */


    *handleShortcuts(selections, metadata) {
      // Multiple options to choose from (or just a single shortcut)
      // Tag any conditional dialog options that result to false,
      // the consuming app does the actual filtering or whatever
      const transformedSelections = selections.map(s => {
        let isAvailable = true;
        let text = '';

        if (s.conditionalExpression && !this.evaluateExpressionOrLiteral(s.conditionalExpression)) {
          isAvailable = false;
        }

        text = s.text.reduce((acc, node) => {
          return acc + this.evaluateExpressionOrLiteral(node).toString();
        }, '');
        return Object.assign(s, {
          isAvailable,
          text
        });
      });
      const optionsResult = new results.OptionsResult(transformedSelections, metadata);
      yield optionsResult;

      if (typeof optionsResult.selected === 'number') {
        const selectedOption = transformedSelections[optionsResult.selected];

        if (selectedOption.content) {
          // Recursively go through the nodes nested within
          return yield* this.evalNodes(selectedOption.content, metadata);
        }
      } else {
        throw new Error('No option selected before resuming dialogue');
      }

      return undefined;
    }
    /**
     * Evaluates the given assignment node
     */


    evaluateAssignment(node) {
      const result = this.evaluateExpressionOrLiteral(node.expression);
      const oldValue = this.variables.get(node.variableName);

      if (oldValue && typeof oldValue !== typeof result) {
        throw new Error(`Variable ${node.variableName} is already type ${typeof oldValue}; cannot set equal to ${result} of type ${typeof result}`);
      }

      this.variables.set(node.variableName, result);
    }
    /**
     * Evaluates the given conditional node
     * Returns the statements to be run as a result of it (if any)
     */


    evaluateConditional(node) {
      if (node.type === 'IfNode') {
        if (this.evaluateExpressionOrLiteral(node.expression)) {
          return node.statement;
        }
      } else if (node.type === 'IfElseNode' || node.type === 'ElseIfNode') {
        if (this.evaluateExpressionOrLiteral(node.expression)) {
          return node.statement;
        }

        if (node.elseStatement) {
          return this.evaluateConditional(node.elseStatement);
        }
      } else {
        // ElseNode
        return node.statement;
      }

      return null;
    }

    evaluateFunctionCall(node) {
      if (this.functions[node.functionName]) {
        return this.functions[node.functionName](...node.args.map(this.evaluateExpressionOrLiteral, this));
      }

      throw new Error(`Function "${node.functionName}" not found`);
    }
    /**
     * Evaluates an expression or literal down to its final value
     */


    evaluateExpressionOrLiteral(node) {
      const nodeHandlers = {
        UnaryMinusExpressionNode: a => {
          return -a;
        },
        ArithmeticExpressionAddNode: (a, b) => {
          return a + b;
        },
        ArithmeticExpressionMinusNode: (a, b) => {
          return a - b;
        },
        ArithmeticExpressionExponentNode: (a, b) => {
          return a ** b;
        },
        ArithmeticExpressionMultiplyNode: (a, b) => {
          return a * b;
        },
        ArithmeticExpressionDivideNode: (a, b) => {
          return a / b;
        },
        ArithmeticExpressionModuloNode: (a, b) => {
          return a % b;
        },
        NegatedBooleanExpressionNode: a => {
          return !a;
        },
        BooleanOrExpressionNode: (a, b) => {
          return a || b;
        },
        BooleanAndExpressionNode: (a, b) => {
          return a && b;
        },
        BooleanXorExpressionNode: (a, b) => {
          return !!(a ^ b);
        },
        // eslint-disable-line no-bitwise
        EqualToExpressionNode: (a, b) => {
          return a === b;
        },
        NotEqualToExpressionNode: (a, b) => {
          return a !== b;
        },
        GreaterThanExpressionNode: (a, b) => {
          return a > b;
        },
        GreaterThanOrEqualToExpressionNode: (a, b) => {
          return a >= b;
        },
        LessThanExpressionNode: (a, b) => {
          return a < b;
        },
        LessThanOrEqualToExpressionNode: (a, b) => {
          return a <= b;
        },
        TextNode: a => {
          return a.text;
        },
        NumericLiteralNode: a => {
          return parseFloat(a.numericLiteral);
        },
        StringLiteralNode: a => {
          return `${a.stringLiteral}`;
        },
        BooleanLiteralNode: a => {
          return a.booleanLiteral === 'true';
        },
        VariableNode: a => {
          return this.variables.get(a.variableName);
        },
        FunctionResultNode: a => {
          return this.evaluateFunctionCall(a);
        },
        InlineExpressionNode: a => {
          return a;
        }
      };
      const handler = nodeHandlers[node.type];

      if (!handler) {
        throw new Error(`node type not recognized: ${node.type}`);
      }

      return handler(node instanceof nodeTypes.Expression ? this.evaluateExpressionOrLiteral(node.expression || node.expression1) : node, node.expression2 ? this.evaluateExpressionOrLiteral(node.expression2) : node);
    }

  }

  var runner = {
    Runner,
    TextResult: results.TextResult,
    CommandResult: results.CommandResult,
    OptionsResult: results.OptionsResult
  };

  return runner;

})();

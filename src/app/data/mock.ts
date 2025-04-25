import { Quiz } from '../models/models';

export const quizzes: Quiz[] = [
  // Easy Quizzes (4 quizzes)
  {
    id: 1,
    title: 'JavaScript Basics: Variables and Data Types',
    category: 'JS',
    difficulty: 'Easy',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
    questions: [
      {
        id: 1,
        title: 'Which keyword is used to declare a variable in JavaScript?',
        options: [
          { id: 1, title: 'var', isCorrect: true },
          { id: 2, title: 'function', isCorrect: false },
          { id: 3, title: 'class', isCorrect: false },
          { id: 4, title: 'object', isCorrect: false },
        ],
        answer: 'var',
      },
      {
        id: 2,
        title: 'What is the data type of `true` in JavaScript?',
        options: [
          { id: 1, title: 'String', isCorrect: false },
          { id: 2, title: 'Boolean', isCorrect: true },
          { id: 3, title: 'Number', isCorrect: false },
          { id: 4, title: 'Object', isCorrect: false },
        ],
        answer: 'Boolean',
      },
      {
        id: 3,
        title: 'What does `typeof null` return?',
        options: [
          { id: 1, title: 'null', isCorrect: false },
          { id: 2, title: 'undefined', isCorrect: false },
          { id: 3, title: 'object', isCorrect: true },
          { id: 4, title: 'string', isCorrect: false },
        ],
        answer: 'object',
      },
      {
        id: 4,
        title: 'Which of these is a valid way to declare a string?',
        options: [
          { id: 1, title: "let str = 'Hello';", isCorrect: true },
          { id: 2, title: 'let str = Hello;', isCorrect: false },
          { id: 3, title: 'let str = {Hello};', isCorrect: false },
          { id: 4, title: 'let str = (Hello);', isCorrect: false },
        ],
        answer: "let str = 'Hello';",
      },
      {
        id: 5,
        title: "What is the value of `5 + '5'` in JavaScript?",
        options: [
          { id: 1, title: '10', isCorrect: false },
          { id: 2, title: '55', isCorrect: true },
          { id: 3, title: 'NaN', isCorrect: false },
          { id: 4, title: 'undefined', isCorrect: false },
        ],
        answer: '55',
      },
      {
        id: 6,
        title: 'Which symbol is used for strict equality comparison?',
        options: [
          { id: 1, title: '==', isCorrect: false },
          { id: 2, title: '===', isCorrect: true },
          { id: 3, title: '=', isCorrect: false },
          { id: 4, title: '!=', isCorrect: false },
        ],
        answer: '===',
      },
    ],
  },
  {
    id: 2,
    title: 'JavaScript Basics: Operators',
    category: 'JS',
    difficulty: 'Easy',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'What does the `&&` operator do?',
        options: [
          { id: 1, title: 'Logical OR', isCorrect: false },
          { id: 2, title: 'Logical AND', isCorrect: true },
          { id: 3, title: 'Addition', isCorrect: false },
          { id: 4, title: 'Equality', isCorrect: false },
        ],
        answer: 'Logical AND',
      },
      {
        id: 2,
        title: 'What is the result of `10 % 3`?',
        options: [
          { id: 1, title: '3', isCorrect: false },
          { id: 2, title: '1', isCorrect: true },
          { id: 3, title: '0', isCorrect: false },
          { id: 4, title: '10', isCorrect: false },
        ],
        answer: '1',
      },
      {
        id: 3,
        title: 'Which operator is used for string concatenation?',
        options: [
          { id: 1, title: '+', isCorrect: true },
          { id: 2, title: '-', isCorrect: false },
          { id: 3, title: '*', isCorrect: false },
          { id: 4, title: '/', isCorrect: false },
        ],
        answer: '+',
      },
      {
        id: 4,
        title: 'What does `!true` evaluate to?',
        options: [
          { id: 1, title: 'true', isCorrect: false },
          { id: 2, title: 'false', isCorrect: true },
          { id: 3, title: 'undefined', isCorrect: false },
          { id: 4, title: 'null', isCorrect: false },
        ],
        answer: 'false',
      },
      {
        id: 5,
        title: 'What is the result of `2 ** 3`?',
        options: [
          { id: 1, title: '6', isCorrect: false },
          { id: 2, title: '8', isCorrect: true },
          { id: 3, title: '9', isCorrect: false },
          { id: 4, title: '5', isCorrect: false },
        ],
        answer: '8',
      },
      {
        id: 6,
        title: 'Which operator increments a number by 1?',
        options: [
          { id: 1, title: '++', isCorrect: true },
          { id: 2, title: '--', isCorrect: false },
          { id: 3, title: '+=', isCorrect: false },
          { id: 4, title: '-=', isCorrect: false },
        ],
        answer: '++',
      },
    ],
  },
  {
    id: 3,
    title: 'JavaScript Basics: Control Flow',
    category: 'JS',
    difficulty: 'Easy',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'Which statement is used to execute code based on a condition?',
        options: [
          { id: 1, title: 'for', isCorrect: false },
          { id: 2, title: 'if', isCorrect: true },
          { id: 3, title: 'while', isCorrect: false },
          { id: 4, title: 'function', isCorrect: false },
        ],
        answer: 'if',
      },
      {
        id: 2,
        title: 'What does a `break` statement do in a loop?',
        options: [
          { id: 1, title: 'Skips the current iteration', isCorrect: false },
          { id: 2, title: 'Exits the loop', isCorrect: true },
          { id: 3, title: 'Restarts the loop', isCorrect: false },
          { id: 4, title: 'Pauses the loop', isCorrect: false },
        ],
        answer: 'Exits the loop',
      },
      {
        id: 3,
        title: 'What is the purpose of the `else` statement?',
        options: [
          { id: 1, title: 'To define a loop', isCorrect: false },
          { id: 2, title: 'To handle the false condition', isCorrect: true },
          { id: 3, title: 'To declare a variable', isCorrect: false },
          { id: 4, title: 'To call a function', isCorrect: false },
        ],
        answer: 'To handle the false condition',
      },
      {
        id: 4,
        title: 'Which loop runs at least once regardless of the condition?',
        options: [
          { id: 1, title: 'for', isCorrect: false },
          { id: 2, title: 'while', isCorrect: false },
          { id: 3, title: 'do...while', isCorrect: true },
          { id: 4, title: 'for...in', isCorrect: false },
        ],
        answer: 'do...while',
      },
      {
        id: 5,
        title: 'What does `continue` do in a loop?',
        options: [
          { id: 1, title: 'Exits the loop', isCorrect: false },
          { id: 2, title: 'Skips the current iteration', isCorrect: true },
          { id: 3, title: 'Restarts the loop', isCorrect: false },
          { id: 4, title: 'Pauses the loop', isCorrect: false },
        ],
        answer: 'Skips the current iteration',
      },
      {
        id: 6,
        title: 'What does `if (x > 5) { return true; }` do if `x` is 3?',
        options: [
          { id: 1, title: 'Returns true', isCorrect: false },
          { id: 2, title: 'Returns false', isCorrect: false },
          { id: 3, title: 'Returns undefined', isCorrect: true },
          { id: 4, title: 'Throws an error', isCorrect: false },
        ],
        answer: 'Returns undefined',
      },
    ],
  },
  {
    id: 4,
    title: 'JavaScript Basics: Functions',
    category: 'JS',
    difficulty: 'Easy',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'How do you declare a function in JavaScript?',
        options: [
          { id: 1, title: 'function myFunc() {}', isCorrect: true },
          { id: 2, title: 'myFunc() {}', isCorrect: false },
          { id: 3, title: 'func myFunc() {}', isCorrect: false },
          { id: 4, title: 'def myFunc() {}', isCorrect: false },
        ],
        answer: 'function myFunc() {}',
      },
      {
        id: 2,
        title: 'What does `return` do in a function?',
        options: [
          { id: 1, title: 'Declares a variable', isCorrect: false },
          {
            id: 2,
            title: 'Exits the function and returns a value',
            isCorrect: true,
          },
          { id: 3, title: 'Loops through an array', isCorrect: false },
          { id: 4, title: 'Calls another function', isCorrect: false },
        ],
        answer: 'Exits the function and returns a value',
      },
      {
        id: 3,
        title:
          'What is the output of `function add(a, b) { return a + b; }` when called with `add(2, 3)`?',
        options: [
          { id: 1, title: '5', isCorrect: true },
          { id: 2, title: '6', isCorrect: false },
          { id: 3, title: '23', isCorrect: false },
          { id: 4, title: 'undefined', isCorrect: false },
        ],
        answer: '5',
      },
      {
        id: 4,
        title: 'What is a parameter in a function?',
        options: [
          { id: 1, title: 'A loop condition', isCorrect: false },
          {
            id: 2,
            title: 'A variable passed into the function',
            isCorrect: true,
          },
          { id: 3, title: 'A return value', isCorrect: false },
          { id: 4, title: 'A global variable', isCorrect: false },
        ],
        answer: 'A variable passed into the function',
      },
      {
        id: 5,
        title:
          'What happens if a function is called without a `return` statement?',
        options: [
          { id: 1, title: 'Returns null', isCorrect: false },
          { id: 2, title: 'Returns undefined', isCorrect: true },
          { id: 3, title: 'Throws an error', isCorrect: false },
          { id: 4, title: 'Returns 0', isCorrect: false },
        ],
        answer: 'Returns undefined',
      },
      {
        id: 6,
        title: 'How do you call a function named `sayHello`?',
        options: [
          { id: 1, title: 'sayHello()', isCorrect: true },
          { id: 2, title: 'sayHello[]', isCorrect: false },
          { id: 3, title: 'sayHello{}', isCorrect: false },
          { id: 4, title: 'sayHello', isCorrect: false },
        ],
        answer: 'sayHello()',
      },
    ],
  },

  // Intermediate Quizzes (3 quizzes)
  {
    id: 5,
    title: 'JavaScript Arrays and Loops',
    category: 'JS',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'Which method adds an element to the end of an array?',
        options: [
          { id: 1, title: 'push()', isCorrect: true },
          { id: 2, title: 'pop()', isCorrect: false },
          { id: 3, title: 'shift()', isCorrect: false },
          { id: 4, title: 'unshift()', isCorrect: false },
        ],
        answer: 'push()',
      },
      {
        id: 2,
        title: 'What does `array.map()` do?',
        options: [
          { id: 1, title: 'Removes elements', isCorrect: false },
          {
            id: 2,
            title: 'Creates a new array with transformed elements',
            isCorrect: true,
          },
          { id: 3, title: 'Sorts the array', isCorrect: false },
          { id: 4, title: 'Reverses the array', isCorrect: false },
        ],
        answer: 'Creates a new array with transformed elements',
      },
      {
        id: 3,
        title: 'Which loop is best for iterating over an array’s indices?',
        options: [
          { id: 1, title: 'for...of', isCorrect: false },
          { id: 2, title: 'for', isCorrect: true },
          { id: 3, title: 'while', isCorrect: false },
          { id: 4, title: 'do...while', isCorrect: false },
        ],
        answer: 'for',
      },
      {
        id: 4,
        title: 'What does `array.filter(x => x > 5)` do?',
        options: [
          { id: 1, title: 'Maps elements greater than 5', isCorrect: false },
          {
            id: 2,
            title: 'Returns a new array with elements greater than 5',
            isCorrect: true,
          },
          { id: 3, title: 'Sorts elements greater than 5', isCorrect: false },
          { id: 4, title: 'Removes elements less than 5', isCorrect: false },
        ],
        answer: 'Returns a new array with elements greater than 5',
      },
      {
        id: 5,
        title: 'What is the output of `[1, 2, 3].reduce((a, b) => a + b, 0)`?',
        options: [
          { id: 1, title: '6', isCorrect: true },
          { id: 2, title: '123', isCorrect: false },
          { id: 3, title: '[1, 2, 3]', isCorrect: false },
          { id: 4, title: 'undefined', isCorrect: false },
        ],
        answer: '6',
      },
      {
        id: 6,
        title: 'What does `forEach` return?',
        options: [
          { id: 1, title: 'A new array', isCorrect: false },
          { id: 2, title: 'undefined', isCorrect: true },
          { id: 3, title: 'The original array', isCorrect: false },
          { id: 4, title: 'The last element', isCorrect: false },
        ],
        answer: 'undefined',
      },
    ],
  },
  {
    id: 6,
    title: 'JavaScript Objects and Prototypes',
    category: 'JS',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'How do you add a property to an object?',
        options: [
          { id: 1, title: 'obj.property = value', isCorrect: true },
          { id: 2, title: 'obj.addProperty(value)', isCorrect: false },
          { id: 3, title: 'obj[property] = value', isCorrect: true },
          { id: 4, title: 'obj.push(value)', isCorrect: false },
        ],
        answer: 'obj.property = value',
      },
      {
        id: 2,
        title: 'What does `Object.keys(obj)` return?',
        options: [
          { id: 1, title: 'An array of property values', isCorrect: false },
          { id: 2, title: 'An array of property names', isCorrect: true },
          { id: 3, title: 'The object itself', isCorrect: false },
          { id: 4, title: 'A string of property names', isCorrect: false },
        ],
        answer: 'An array of property names',
      },
      {
        id: 3,
        title: 'What is the prototype chain in JavaScript?',
        options: [
          { id: 1, title: 'A chain of arrays', isCorrect: false },
          { id: 2, title: 'A mechanism for inheritance', isCorrect: true },
          { id: 3, title: 'A loop structure', isCorrect: false },
          { id: 4, title: 'A type of function', isCorrect: false },
        ],
        answer: 'A mechanism for inheritance',
      },
      {
        id: 4,
        title: 'How do you create an object that inherits from another object?',
        options: [
          { id: 1, title: 'Object.create(parent)', isCorrect: true },
          { id: 2, title: 'Object.copy(parent)', isCorrect: false },
          { id: 3, title: 'Object.inherit(parent)', isCorrect: false },
          { id: 4, title: 'Object.clone(parent)', isCorrect: false },
        ],
        answer: 'Object.create(parent)',
      },
      {
        id: 5,
        title: 'What does `hasOwnProperty()` check?',
        options: [
          {
            id: 1,
            title: 'If a property exists in the prototype',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'If a property exists directly on the object',
            isCorrect: true,
          },
          { id: 3, title: 'If a property is a function', isCorrect: false },
          { id: 4, title: 'If a property is undefined', isCorrect: false },
        ],
        answer: 'If a property exists directly on the object',
      },
      {
        id: 6,
        title: 'What is the output of `Object.values({a: 1, b: 2})`?',
        options: [
          { id: 1, title: '[1, 2]', isCorrect: true },
          { id: 2, title: "['a', 'b']", isCorrect: false },
          { id: 3, title: '{a: 1, b: 2}', isCorrect: false },
          { id: 4, title: 'undefined', isCorrect: false },
        ],
        answer: '[1, 2]',
      },
    ],
  },
  {
    id: 7,
    title: 'JavaScript Functions and Scope',
    category: 'JS',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'What is a closure in JavaScript?',
        options: [
          { id: 1, title: 'A loop structure', isCorrect: false },
          {
            id: 2,
            title: 'A function with access to its outer scope',
            isCorrect: true,
          },
          { id: 3, title: 'A type of array', isCorrect: false },
          { id: 4, title: 'A method to declare variables', isCorrect: false },
        ],
        answer: 'A function with access to its outer scope',
      },
      {
        id: 2,
        title: 'What does `this` refer to in an arrow function?',
        options: [
          { id: 1, title: 'The global object', isCorrect: false },
          { id: 2, title: 'The object it’s called on', isCorrect: false },
          { id: 3, title: 'The enclosing lexical context', isCorrect: true },
          { id: 4, title: 'The function itself', isCorrect: false },
        ],
        answer: 'The enclosing lexical context',
      },
      {
        id: 3,
        title: 'What is the difference between `let` and `var`?',
        options: [
          {
            id: 1,
            title: '`let` is block-scoped, `var` is function-scoped',
            isCorrect: true,
          },
          {
            id: 2,
            title: '`let` is function-scoped, `var` is block-scoped',
            isCorrect: false,
          },
          { id: 3, title: 'There is no difference', isCorrect: false },
          { id: 4, title: '`let` cannot be reassigned', isCorrect: false },
        ],
        answer: '`let` is block-scoped, `var` is function-scoped',
      },
      {
        id: 4,
        title: 'What does `call()` do?',
        options: [
          { id: 1, title: 'Binds a function to an event', isCorrect: false },
          {
            id: 2,
            title: 'Calls a function with a specified `this` value',
            isCorrect: true,
          },
          { id: 3, title: 'Creates a new function', isCorrect: false },
          { id: 4, title: 'Loops through an array', isCorrect: false },
        ],
        answer: 'Calls a function with a specified `this` value',
      },
      {
        id: 5,
        title: 'What is hoisting in JavaScript?',
        options: [
          {
            id: 1,
            title: 'Moving variables to the bottom of the scope',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'Moving declarations to the top of the scope',
            isCorrect: true,
          },
          { id: 3, title: 'Creating a new scope', isCorrect: false },
          { id: 4, title: 'Deleting variables', isCorrect: false },
        ],
        answer: 'Moving declarations to the top of the scope',
      },
      {
        id: 6,
        title: 'What does `bind()` return?',
        options: [
          {
            id: 1,
            title: 'A new function with a bound `this`',
            isCorrect: true,
          },
          { id: 2, title: 'The original function', isCorrect: false },
          { id: 3, title: 'undefined', isCorrect: false },
          { id: 4, title: 'The `this` value', isCorrect: false },
        ],
        answer: 'A new function with a bound `this`',
      },
    ],
  },

  // Hard Quizzes (5 quizzes)
  {
    id: 8,
    title: 'Advanced JavaScript: Closures and IIFEs',
    category: 'JS',
    difficulty: 'Hard',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'What does an IIFE stand for?',
        options: [
          {
            id: 1,
            title: 'Immediately Invoked Function Expression',
            isCorrect: true,
          },
          {
            id: 2,
            title: 'Internal Inline Function Execution',
            isCorrect: false,
          },
          {
            id: 3,
            title: 'Iterative Internal Function Expression',
            isCorrect: false,
          },
          {
            id: 4,
            title: 'Instantiated Inline Function Execution',
            isCorrect: false,
          },
        ],
        answer: 'Immediately Invoked Function Expression',
      },
      {
        id: 2,
        title:
          'What is the output of `(function() { let x = 1; return function() { return x++; }; })()()`?',
        options: [
          { id: 1, title: '1', isCorrect: true },
          { id: 2, title: '2', isCorrect: false },
          { id: 3, title: 'undefined', isCorrect: false },
          { id: 4, title: 'NaN', isCorrect: false },
        ],
        answer: '1',
      },
      {
        id: 3,
        title: 'How can a closure cause a memory leak?',
        options: [
          { id: 1, title: 'By creating global variables', isCorrect: false },
          {
            id: 2,
            title: 'By retaining references to variables',
            isCorrect: true,
          },
          { id: 3, title: 'By using too many loops', isCorrect: false },
          { id: 4, title: 'By deleting variables', isCorrect: false },
        ],
        answer: 'By retaining references to variables',
      },
      {
        id: 4,
        title:
          'What does this code do: `for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); }`?',
        options: [
          { id: 1, title: 'Logs 0, 1, 2', isCorrect: false },
          { id: 2, title: 'Logs 3, 3, 3', isCorrect: true },
          { id: 3, title: 'Logs 1, 2, 3', isCorrect: false },
          { id: 4, title: 'Throws an error', isCorrect: false },
        ],
        answer: 'Logs 3, 3, 3',
      },
      {
        id: 5,
        title: 'How do you fix the issue in the previous question?',
        options: [
          { id: 1, title: 'Use `let` instead of `var`', isCorrect: true },
          { id: 2, title: 'Use `const` instead of `var`', isCorrect: false },
          { id: 3, title: 'Remove the `setTimeout`', isCorrect: false },
          { id: 4, title: 'Use a `for...of` loop', isCorrect: false },
        ],
        answer: 'Use `let` instead of `var`',
      },
      {
        id: 6,
        title: 'What is the benefit of using an IIFE?',
        options: [
          { id: 1, title: 'It creates a new loop', isCorrect: false },
          {
            id: 2,
            title: 'It avoids polluting the global scope',
            isCorrect: true,
          },
          { id: 3, title: 'It speeds up function execution', isCorrect: false },
          { id: 4, title: 'It prevents variable hoisting', isCorrect: false },
        ],
        answer: 'It avoids polluting the global scope',
      },
    ],
  },
  {
    id: 9,
    title: 'Advanced JavaScript: Promises and Async/Await',
    category: 'JS',
    difficulty: 'Hard',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'What does a Promise represent?',
        options: [
          { id: 1, title: 'A loop structure', isCorrect: false },
          {
            id: 2,
            title: 'A future value from an asynchronous operation',
            isCorrect: true,
          },
          { id: 3, title: 'A synchronous function', isCorrect: false },
          { id: 4, title: 'A global variable', isCorrect: false },
        ],
        answer: 'A future value from an asynchronous operation',
      },
      {
        id: 2,
        title: 'What does `Promise.all()` do?',
        options: [
          { id: 1, title: 'Runs promises one by one', isCorrect: false },
          {
            id: 2,
            title: 'Resolves when all promises resolve',
            isCorrect: true,
          },
          { id: 3, title: 'Rejects all promises', isCorrect: false },
          { id: 4, title: 'Ignores rejected promises', isCorrect: false },
        ],
        answer: 'Resolves when all promises resolve',
      },
      {
        id: 3,
        title: 'What happens if a Promise in `Promise.all()` rejects?',
        options: [
          { id: 1, title: 'It waits for other promises', isCorrect: false },
          { id: 2, title: 'It rejects immediately', isCorrect: true },
          {
            id: 3,
            title: 'It resolves with the fulfilled promises',
            isCorrect: false,
          },
          { id: 4, title: 'It throws a syntax error', isCorrect: false },
        ],
        answer: 'It rejects immediately',
      },
      {
        id: 4,
        title: 'What does `async/await` do?',
        options: [
          { id: 1, title: 'Makes code synchronous', isCorrect: false },
          { id: 2, title: 'Simplifies working with promises', isCorrect: true },
          { id: 3, title: 'Creates a new promise', isCorrect: false },
          { id: 4, title: 'Handles synchronous errors', isCorrect: false },
        ],
        answer: 'Simplifies working with promises',
      },
      {
        id: 5,
        title: 'What happens if an `await`ed promise rejects?',
        options: [
          { id: 1, title: 'The function continues', isCorrect: false },
          { id: 2, title: 'It throws an error', isCorrect: true },
          { id: 3, title: 'It returns undefined', isCorrect: false },
          { id: 4, title: 'It resolves to null', isCorrect: false },
        ],
        answer: 'It throws an error',
      },
      {
        id: 6,
        title: 'How do you handle errors with `async/await`?',
        options: [
          { id: 1, title: 'Using `try/catch`', isCorrect: true },
          { id: 2, title: 'Using `.then()`', isCorrect: false },
          { id: 3, title: 'Using `if/else`', isCorrect: false },
          { id: 4, title: 'Using `finally()`', isCorrect: false },
        ],
        answer: 'Using `try/catch`',
      },
    ],
  },
  {
    id: 10,
    title: 'Advanced JavaScript: Event Loop and Concurrency',
    category: 'JS',
    difficulty: 'Hard',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'What is the event loop in JavaScript?',
        options: [
          { id: 1, title: 'A loop for iterating arrays', isCorrect: false },
          {
            id: 2,
            title: 'A mechanism for handling asynchronous tasks',
            isCorrect: true,
          },
          { id: 3, title: 'A type of closure', isCorrect: false },
          { id: 4, title: 'A synchronous function', isCorrect: false },
        ],
        answer: 'A mechanism for handling asynchronous tasks',
      },
      {
        id: 2,
        title:
          'What is the output of `console.log(1); setTimeout(() => console.log(2), 0); console.log(3);`?',
        options: [
          { id: 1, title: '1, 2, 3', isCorrect: false },
          { id: 2, title: '1, 3, 2', isCorrect: true },
          { id: 3, title: '2, 1, 3', isCorrect: false },
          { id: 4, title: '3, 2, 1', isCorrect: false },
        ],
        answer: '1, 3, 2',
      },
      {
        id: 3,
        title: 'What are microtasks in the event loop?',
        options: [
          { id: 1, title: 'Tasks that run after macrotasks', isCorrect: true },
          {
            id: 2,
            title: 'Tasks that run before macrotasks',
            isCorrect: false,
          },
          { id: 3, title: 'Tasks that run synchronously', isCorrect: false },
          { id: 4, title: 'Tasks that are ignored', isCorrect: false },
        ],
        answer: 'Tasks that run after macrotasks',
      },
      {
        id: 4,
        title: 'Which of these creates a microtask?',
        options: [
          // Which of these creates a microtask?
          { id: 1, title: 'setTimeout()', isCorrect: false },
          { id: 2, title: 'Promise.resolve()', isCorrect: true },
          { id: 3, title: 'setInterval()', isCorrect: false },
          { id: 4, title: 'setImmediate()', isCorrect: false },
        ],
        answer: 'Promise.resolve()',
      },
      {
        id: 5,
        title:
          'What is the output of `Promise.resolve(1).then(console.log); console.log(2);`?',
        options: [
          { id: 1, title: '1, 2', isCorrect: false },
          { id: 2, title: '2, 1', isCorrect: true },
          { id: 3, title: '1, 1', isCorrect: false },
          { id: 4, title: '2, 2', isCorrect: false },
        ],
        answer: '2, 1',
      },
      {
        id: 6,
        title: 'What does `queueMicrotask()` do?',
        options: [
          {
            id: 1,
            title: 'Adds a task to the macrotask queue',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'Adds a task to the microtask queue',
            isCorrect: true,
          },
          { id: 3, title: 'Removes a task from the queue', isCorrect: false },
          { id: 4, title: 'Delays a task by 1 second', isCorrect: false },
        ],
        answer: 'Adds a task to the microtask queue',
      },
    ],
  },
  {
    id: 11,
    title: 'Advanced JavaScript: Modules and ES6+',
    category: 'JS',
    difficulty: 'Hard',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'How do you export a function in ES6 modules?',
        options: [
          { id: 1, title: 'module.exports = func', isCorrect: false },
          { id: 2, title: 'export function func() {}', isCorrect: true },
          { id: 3, title: 'exports.func = func', isCorrect: false },
          { id: 4, title: 'function export func() {}', isCorrect: false },
        ],
        answer: 'export function func() {}',
      },
      {
        id: 2,
        title: "What does `import * as name from './module'` do?",
        options: [
          { id: 1, title: 'Imports a single export', isCorrect: false },
          { id: 2, title: 'Imports all exports as an object', isCorrect: true },
          { id: 3, title: 'Imports the default export', isCorrect: false },
          { id: 4, title: 'Imports nothing', isCorrect: false },
        ],
        answer: 'Imports all exports as an object',
      },
      {
        id: 3,
        title: 'What is the difference between `export default` and `export`?',
        options: [
          {
            id: 1,
            title: '`export default` can only export one value',
            isCorrect: true,
          },
          {
            id: 2,
            title: '`export` can only export one value',
            isCorrect: false,
          },
          { id: 3, title: 'There is no difference', isCorrect: false },
          {
            id: 4,
            title: '`export default` cannot be renamed',
            isCorrect: false,
          },
        ],
        answer: '`export default` can only export one value',
      },
      {
        id: 4,
        title: 'What does the spread operator (`...`) do in ES6?',
        options: [
          { id: 1, title: 'Creates a loop', isCorrect: false },
          { id: 2, title: 'Expands elements', isCorrect: true },
          { id: 3, title: 'Declares a variable', isCorrect: false },
          { id: 4, title: 'Removes elements', isCorrect: false },
        ],
        answer: 'Expands elements',
      },
      {
        id: 5,
        title:
          'What is the output of `const {a, b} = {a: 1, b: 2}; console.log(a, b);`?',
        options: [
          { id: 1, title: '1, 2', isCorrect: true },
          { id: 2, title: 'undefined, undefined', isCorrect: false },
          { id: 3, title: '{a: 1}, {b: 2}', isCorrect: false },
          { id: 4, title: 'a, b', isCorrect: false },
        ],
        answer: '1, 2',
      },
      {
        id: 6,
        title: 'What does `dynamic import()` return?',
        options: [
          { id: 1, title: 'A Promise', isCorrect: true },
          { id: 2, title: 'A synchronous module', isCorrect: false },
          { id: 3, title: 'An array of exports', isCorrect: false },
          { id: 4, title: 'undefined', isCorrect: false },
        ],
        answer: 'A Promise',
      },
    ],
  },
  {
    id: 12,
    title: 'Advanced JavaScript: Performance and Optimization',
    category: 'JS',
    difficulty: 'Hard',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js', // JavaScript icon
    questions: [
      {
        id: 1,
        title: 'What can cause a performance bottleneck in JavaScript?',
        options: [
          { id: 1, title: 'Using small arrays', isCorrect: false },
          { id: 2, title: 'Excessive DOM manipulation', isCorrect: true },
          { id: 3, title: 'Declaring variables', isCorrect: false },
          { id: 4, title: 'Using arrow functions', isCorrect: false },
        ],
        answer: 'Excessive DOM manipulation',
      },
      {
        id: 2,
        title: 'What is memoization?',
        options: [
          { id: 1, title: 'Caching function results', isCorrect: true },
          { id: 2, title: 'Deleting unused variables', isCorrect: false },
          { id: 3, title: 'Creating new functions', isCorrect: false },
          { id: 4, title: 'Looping through arrays', isCorrect: false },
        ],
        answer: 'Caching function results',
      },
      {
        id: 3,
        title: 'What does `debounce` do in JavaScript?',
        options: [
          { id: 1, title: 'Delays function execution', isCorrect: true },
          { id: 2, title: 'Executes a function immediately', isCorrect: false },
          { id: 3, title: 'Removes event listeners', isCorrect: false },
          { id: 4, title: 'Increases function speed', isCorrect: false },
        ],
        answer: 'Delays function execution',
      },
      {
        id: 4,
        title:
          'What is the benefit of using `requestAnimationFrame` over `setTimeout` for animations?',
        options: [
          { id: 1, title: 'It runs faster', isCorrect: false },
          {
            id: 2,
            title: "It syncs with the browser's refresh rate",
            isCorrect: true,
          },
          { id: 3, title: 'It uses less memory', isCorrect: false },
          { id: 4, title: 'It prevents closures', isCorrect: false },
        ],
        answer: "It syncs with the browser's refresh rate",
      },
      {
        id: 5,
        title: 'What does `Object.seal()` do?',
        options: [
          {
            id: 1,
            title: 'Prevents adding/removing properties',
            isCorrect: true,
          },
          { id: 2, title: 'Freezes the object completely', isCorrect: false },
          { id: 3, title: 'Deletes properties', isCorrect: false },
          { id: 4, title: 'Clones the object', isCorrect: false },
        ],
        answer: 'Prevents adding/removing properties',
      },
      {
        id: 6,
        title:
          'What is the difference between `Object.seal()` and `Object.freeze()`?',
        options: [
          {
            id: 1,
            title: '`freeze` prevents property changes, `seal` allows them',
            isCorrect: true,
          },
          {
            id: 2,
            title: '`seal` prevents property changes, `freeze` allows them',
            isCorrect: false,
          },
          { id: 3, title: 'There is no difference', isCorrect: false },
          { id: 4, title: '`freeze` deletes properties', isCorrect: false },
        ],
        answer: '`freeze` prevents property changes, `seal` allows them',
      },
    ],
  },
];

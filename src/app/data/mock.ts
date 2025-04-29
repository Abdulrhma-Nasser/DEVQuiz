import { Quiz } from '../models/models';

export const quizzes: Quiz[] = [
  // Beginner Quizzes (4 quizzes)
  {
    id: 1,
    title: 'JavaScript Beginner Quiz 1',
    category: 'JS',
    difficulty: 'Beginner',
    score: 0,
    completed: true,
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
    title: 'JavaScript Beginner Quiz 2',
    category: 'JS',
    difficulty: 'Beginner',
    score: 0,
    completed: true,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Beginner Quiz 3',
    category: 'JS',
    difficulty: 'Beginner',
    score: 0,
    completed: true,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Beginner Quiz 4',
    category: 'JS',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Intermediate Quiz 5',
    category: 'JS',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Intermediate Quiz 6',
    category: 'JS',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Intermediate Quiz 7',
    category: 'JS',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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

  // Advanced Quizzes (5 quizzes)
  {
    id: 8,
    title: 'JavaScript Advanced Quiz 8',
    category: 'JS',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Advanced Quiz 9',
    category: 'JS',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Advanced Quiz 10',
    category: 'JS',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Advanced Quiz 11',
    category: 'JS',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
    title: 'JavaScript Advanced Quiz 12',
    category: 'JS',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
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
  // Beginner Python Quizzes (3 quizzes)
  {
    id: 1,
    title: 'Python Beginner Quiz 1',
    category: 'Python',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'Which keyword is used to define a function in Python?',
        options: [
          { id: 1, title: 'def', isCorrect: true },
          { id: 2, title: 'function', isCorrect: false },
          { id: 3, title: 'func', isCorrect: false },
          { id: 4, title: 'define', isCorrect: false },
        ],
        answer: 'def',
      },
      {
        id: 2,
        title: 'What is the data type of `3.14` in Python?',
        options: [
          { id: 1, title: 'int', isCorrect: false },
          { id: 2, title: 'float', isCorrect: true },
          { id: 3, title: 'str', isCorrect: false },
          { id: 4, title: 'bool', isCorrect: false },
        ],
        answer: 'float',
      },
      {
        id: 3,
        title: 'How do you create a list in Python?',
        options: [
          { id: 1, title: 'my_list = []', isCorrect: true },
          { id: 2, title: 'my_list = {}', isCorrect: false },
          { id: 3, title: 'my_list = ()', isCorrect: false },
          { id: 4, title: 'my_list = //', isCorrect: false },
        ],
        answer: 'my_list = []',
      },
      {
        id: 4,
        title: 'What does the `print()` function do?',
        options: [
          { id: 1, title: 'Stores a value', isCorrect: false },
          { id: 2, title: 'Outputs to the console', isCorrect: true },
          { id: 3, title: 'Defines a variable', isCorrect: false },
          { id: 4, title: 'Loops through data', isCorrect: false },
        ],
        answer: 'Outputs to the console',
      },
      {
        id: 5,
        title: 'What is the result of `"Hello" + " World"` in Python?',
        options: [
          { id: 1, title: 'HelloWorld', isCorrect: false },
          { id: 2, title: 'Hello World', isCorrect: true },
          { id: 3, title: 'Hello + World', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: 'Hello World',
      },
      {
        id: 6,
        title: 'Which operator checks for equality in Python?',
        options: [
          { id: 1, title: '=', isCorrect: false },
          { id: 2, title: '==', isCorrect: true },
          { id: 3, title: '===', isCorrect: false },
          { id: 4, title: '!=', isCorrect: false },
        ],
        answer: '==',
      },
    ],
  },
  {
    id: 2,
    title: 'Python Beginner Quiz 2',
    category: 'Python',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What does the `len()` function return for a string?',
        options: [
          { id: 1, title: 'The string itself', isCorrect: false },
          { id: 2, title: 'The number of characters', isCorrect: true },
          { id: 3, title: 'The first character', isCorrect: false },
          { id: 4, title: 'The last character', isCorrect: false },
        ],
        answer: 'The number of characters',
      },
      {
        id: 2,
        title: 'Which keyword is used for a conditional statement in Python?',
        options: [
          { id: 1, title: 'if', isCorrect: true },
          { id: 2, title: 'case', isCorrect: false },
          { id: 3, title: 'switch', isCorrect: false },
          { id: 4, title: 'cond', isCorrect: false },
        ],
        answer: 'if',
      },
      {
        id: 3,
        title: 'What is the result of `5 // 2` in Python?',
        options: [
          { id: 1, title: '2.5', isCorrect: false },
          { id: 2, title: '2', isCorrect: true },
          { id: 3, title: '3', isCorrect: false },
          { id: 4, title: '0', isCorrect: false },
        ],
        answer: '2',
      },
      {
        id: 4,
        title: 'How do you write a single-line comment in Python?',
        options: [
          { id: 1, title: '// Comment', isCorrect: false },
          { id: 2, title: '# Comment', isCorrect: true },
          { id: 3, title: '/* Comment */', isCorrect: false },
          { id: 4, title: '-- Comment', isCorrect: false },
        ],
        answer: '# Comment',
      },
      {
        id: 5,
        title: 'What does `range(3)` generate in a `for` loop?',
        options: [
          { id: 1, title: '0, 1, 2', isCorrect: true },
          { id: 2, title: '1, 2, 3', isCorrect: false },
          { id: 3, title: '0, 1, 2, 3', isCorrect: false },
          { id: 4, title: '1, 2', isCorrect: false },
        ],
        answer: '0, 1, 2',
      },
      {
        id: 6,
        title: 'Which of these is a valid variable name in Python?',
        options: [
          { id: 1, title: '2variable', isCorrect: false },
          { id: 2, title: 'my_variable', isCorrect: true },
          { id: 3, title: 'my-variable', isCorrect: false },
          { id: 4, title: 'my variable', isCorrect: false },
        ],
        answer: 'my_variable',
      },
    ],
  },
  {
    id: 3,
    title: 'Python Beginner Quiz 3',
    category: 'Python',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What is the output of `type("Hello")` in Python?',
        options: [
          { id: 1, title: '<class "str">', isCorrect: true },
          { id: 2, title: '<class "int">', isCorrect: false },
          { id: 3, title: '<class "list">', isCorrect: false },
          { id: 4, title: '<class "bool">', isCorrect: false },
        ],
        answer: '<class "str">',
      },
      {
        id: 2,
        title: 'Which keyword is used to exit a loop in Python?',
        options: [
          { id: 1, title: 'break', isCorrect: true },
          { id: 2, title: 'continue', isCorrect: false },
          { id: 3, title: 'exit', isCorrect: false },
          { id: 4, title: 'stop', isCorrect: false },
        ],
        answer: 'break',
      },
      {
        id: 3,
        title: 'What does `False and True` evaluate to in Python?',
        options: [
          { id: 1, title: 'True', isCorrect: false },
          { id: 2, title: 'False', isCorrect: true },
          { id: 3, title: 'None', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: 'False',
      },
      {
        id: 4,
        title: 'How do you create a tuple in Python?',
        options: [
          { id: 1, title: 'my_tuple = ()', isCorrect: true },
          { id: 2, title: 'my_tuple = []', isCorrect: false },
          { id: 3, title: 'my_tuple = {}', isCorrect: false },
          { id: 4, title: 'my_tuple = //', isCorrect: false },
        ],
        answer: 'my_tuple = ()',
      },
      {
        id: 5,
        title: 'What is the result of `10 % 3` in Python?',
        options: [
          { id: 1, title: '1', isCorrect: true },
          { id: 2, title: '3', isCorrect: false },
          { id: 3, title: '0', isCorrect: false },
          { id: 4, title: '10', isCorrect: false },
        ],
        answer: '1',
      },
      {
        id: 6,
        title: 'Which function converts a string to an integer in Python?',
        options: [
          { id: 1, title: 'int()', isCorrect: true },
          { id: 2, title: 'str()', isCorrect: false },
          { id: 3, title: 'float()', isCorrect: false },
          { id: 4, title: 'bool()', isCorrect: false },
        ],
        answer: 'int()',
      },
    ],
  },

  // Intermediate Python Quizzes (5 quizzes)
  {
    id: 4,
    title: 'Python Intermediate Quiz 4',
    category: 'Python',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'How do you define a class in Python?',
        options: [
          { id: 1, title: 'class MyClass:', isCorrect: true },
          { id: 2, title: 'def MyClass():', isCorrect: false },
          { id: 3, title: 'object MyClass:', isCorrect: false },
          { id: 4, title: 'struct MyClass:', isCorrect: false },
        ],
        answer: 'class MyClass:',
      },
      {
        id: 2,
        title: 'What does the `__init__` method do in a Python class?',
        options: [
          { id: 1, title: 'Destroys the object', isCorrect: false },
          { id: 2, title: 'Initializes the object', isCorrect: true },
          { id: 3, title: 'Defines a static method', isCorrect: false },
          { id: 4, title: 'Creates a subclass', isCorrect: false },
        ],
        answer: 'Initializes the object',
      },
      {
        id: 3,
        title: 'What is the output of `[x for x in range(5) if x % 2 == 0]`?',
        options: [
          { id: 1, title: '[0, 2, 4]', isCorrect: true },
          { id: 2, title: '[1, 3]', isCorrect: false },
          { id: 3, title: '[0, 1, 2, 3, 4]', isCorrect: false },
          { id: 4, title: '[2, 4]', isCorrect: false },
        ],
        answer: '[0, 2, 4]',
      },
      {
        id: 4,
        title: 'What does the `super()` function do in a class?',
        options: [
          { id: 1, title: 'Creates a new instance', isCorrect: false },
          { id: 2, title: 'Calls the parent class method', isCorrect: true },
          { id: 3, title: 'Defines a property', isCorrect: false },
          { id: 4, title: 'Deletes an object', isCorrect: false },
        ],
        answer: 'Calls the parent class method',
      },
      {
        id: 5,
        title: 'What is a Python dictionary comprehension?',
        options: [
          { id: 1, title: 'A loop over a list', isCorrect: false },
          {
            id: 2,
            title: 'A concise way to create dictionaries',
            isCorrect: true,
          },
          { id: 3, title: 'A method to sort dictionaries', isCorrect: false },
          { id: 4, title: 'A way to delete keys', isCorrect: false },
        ],
        answer: 'A concise way to create dictionaries',
      },
      {
        id: 6,
        title: 'What does `self` refer to in a Python class method?',
        options: [
          { id: 1, title: 'The class itself', isCorrect: false },
          { id: 2, title: 'The instance of the class', isCorrect: true },
          { id: 3, title: 'A global variable', isCorrect: false },
          { id: 4, title: 'The parent class', isCorrect: false },
        ],
        answer: 'The instance of the class',
      },
    ],
  },
  {
    id: 5,
    title: 'Python Intermediate Quiz 5',
    category: 'Python',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What is encapsulation in OOP?',
        options: [
          { id: 1, title: 'Hiding data and methods', isCorrect: true },
          {
            id: 2,
            title: 'Inheriting from multiple classes',
            isCorrect: false,
          },
          { id: 3, title: 'Overloading methods', isCorrect: false },
          { id: 4, title: 'Creating abstract classes', isCorrect: false },
        ],
        answer: 'Hiding data and methods',
      },
      {
        id: 2,
        title: 'How do you indicate a private attribute in Python?',
        options: [
          { id: 1, title: 'private __attribute', isCorrect: false },
          { id: 2, title: '__attribute', isCorrect: true },
          { id: 3, title: '_attribute_', isCorrect: false },
          { id: 4, title: 'protected _attribute', isCorrect: false },
        ],
        answer: '__attribute',
      },
      {
        id: 3,
        title: 'What does the `@classmethod` decorator do?',
        options: [
          { id: 1, title: 'Makes a method static', isCorrect: false },
          {
            id: 2,
            title: 'Passes the class as the first argument',
            isCorrect: true,
          },
          { id: 3, title: 'Hides the method', isCorrect: false },
          { id: 4, title: 'Overloads the method', isCorrect: false },
        ],
        answer: 'Passes the class as the first argument',
      },
      {
        id: 4,
        title:
          'What is the output of `{k: v for k, v in zip(["a", "b"], [1, 2])}`?',
        options: [
          { id: 1, title: '{"a": 1, "b": 2}', isCorrect: true },
          { id: 2, title: '[("a", 1), ("b", 2)]', isCorrect: false },
          { id: 3, title: '{"a": 2, "b": 1}', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: '{"a": 1, "b": 2}',
      },
      {
        id: 5,
        title: 'What is inheritance in Python OOP?',
        options: [
          { id: 1, title: 'Combining multiple classes', isCorrect: false },
          {
            id: 2,
            title: 'A class deriving from another class',
            isCorrect: true,
          },
          { id: 3, title: 'Hiding class attributes', isCorrect: false },
          { id: 4, title: 'Overriding class methods', isCorrect: false },
        ],
        answer: 'A class deriving from another class',
      },
      {
        id: 6,
        title: 'What does the `isinstance()` function do?',
        options: [
          {
            id: 1,
            title: 'Checks if an object is of a specific type',
            isCorrect: true,
          },
          { id: 2, title: 'Creates a new instance', isCorrect: false },
          { id: 3, title: 'Compares two objects', isCorrect: false },
          { id: 4, title: 'Deletes an instance', isCorrect: false },
        ],
        answer: 'Checks if an object is of a specific type',
      },
    ],
  },
  {
    id: 6,
    title: 'Python Intermediate Quiz 6',
    category: 'Python',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What is polymorphism in OOP?',
        options: [
          {
            id: 1,
            title: 'Using the same interface for different types',
            isCorrect: true,
          },
          { id: 2, title: 'Hiding class attributes', isCorrect: false },
          { id: 3, title: 'Creating multiple classes', isCorrect: false },
          { id: 4, title: 'Restricting attribute access', isCorrect: false },
        ],
        answer: 'Using the same interface for different types',
      },
      {
        id: 2,
        title: 'What does the `try-except` block do in Python?',
        options: [
          { id: 1, title: 'Defines a loop', isCorrect: false },
          { id: 2, title: 'Handles exceptions', isCorrect: true },
          { id: 3, title: 'Creates a class', isCorrect: false },
          { id: 4, title: 'Declares variables', isCorrect: false },
        ],
        answer: 'Handles exceptions',
      },
      {
        id: 3,
        title: 'What is the output of `list(map(lambda x: x*2, [1, 2, 3]))`?',
        options: [
          { id: 1, title: '[2, 4, 6]', isCorrect: true },
          { id: 2, title: '[1, 2, 3]', isCorrect: false },
          { id: 3, title: '[3, 6, 9]', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: '[2, 4, 6]',
      },
      {
        id: 4,
        title: 'What does the `else` clause in a `try-except` block do?',
        options: [
          { id: 1, title: 'Executes if an exception occurs', isCorrect: false },
          { id: 2, title: 'Executes if no exception occurs', isCorrect: true },
          { id: 3, title: 'Defines a new exception', isCorrect: false },
          { id: 4, title: 'Retries the try block', isCorrect: false },
        ],
        answer: 'Executes if no exception occurs',
      },
      {
        id: 5,
        title: 'What is a lambda function in Python?',
        options: [
          { id: 1, title: 'A named function', isCorrect: false },
          { id: 2, title: 'An anonymous function', isCorrect: true },
          { id: 3, title: 'A class method', isCorrect: false },
          { id: 4, title: 'A loop construct', isCorrect: false },
        ],
        answer: 'An anonymous function',
      },
      {
        id: 6,
        title: 'What does the `zip()` function do?',
        options: [
          {
            id: 1,
            title: 'Combines multiple iterables into tuples',
            isCorrect: true,
          },
          { id: 2, title: 'Sorts a list', isCorrect: false },
          { id: 3, title: 'Removes duplicates', isCorrect: false },
          { id: 4, title: 'Filters elements', isCorrect: false },
        ],
        answer: 'Combines multiple iterables into tuples',
      },
    ],
  },
  {
    id: 7,
    title: 'Python Intermediate Quiz 7',
    category: 'Python',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What is method overriding in Python OOP?',
        options: [
          {
            id: 1,
            title: 'Defining a method with the same name in a subclass',
            isCorrect: true,
          },
          { id: 2, title: 'Hiding a method in a superclass', isCorrect: false },
          { id: 3, title: 'Calling a method multiple times', isCorrect: false },
          { id: 4, title: 'Creating a static method', isCorrect: false },
        ],
        answer: 'Defining a method with the same name in a subclass',
      },
      {
        id: 2,
        title: 'What does the `set()` function do in Python?',
        options: [
          { id: 1, title: 'Creates a list', isCorrect: false },
          {
            id: 2,
            title: 'Creates a set with unique elements',
            isCorrect: true,
          },
          { id: 3, title: 'Sorts a dictionary', isCorrect: false },
          { id: 4, title: 'Converts a string to a tuple', isCorrect: false },
        ],
        answer: 'Creates a set with unique elements',
      },
      {
        id: 3,
        title: 'What is the output of `sorted([3, 1, 2], reverse=True)`?',
        options: [
          { id: 1, title: '[3, 2, 1]', isCorrect: true },
          { id: 2, title: '[1, 2, 3]', isCorrect: false },
          { id: 3, title: '[2, 1, 3]', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: '[3, 2, 1]',
      },
      {
        id: 4,
        title: 'What does the `__str__` method do in a Python class?',
        options: [
          { id: 1, title: 'Initializes the object', isCorrect: false },
          { id: 2, title: 'Returns a string representation', isCorrect: true },
          { id: 3, title: 'Compares two objects', isCorrect: false },
          { id: 4, title: 'Deletes the object', isCorrect: false },
        ],
        answer: 'Returns a string representation',
      },
      {
        id: 5,
        title: 'What is a generator in Python?',
        options: [
          {
            id: 1,
            title: 'A function that yields values one at a time',
            isCorrect: true,
          },
          { id: 2, title: 'A loop that runs indefinitely', isCorrect: false },
          { id: 3, title: 'A class method', isCorrect: false },
          { id: 4, title: 'A dictionary comprehension', isCorrect: false },
        ],
        answer: 'A function that yields values one at a time',
      },
      {
        id: 6,
        title: 'What does the `yield` keyword do?',
        options: [
          { id: 1, title: 'Exits a function', isCorrect: false },
          { id: 2, title: 'Produces a value in a generator', isCorrect: true },
          { id: 3, title: 'Raises an exception', isCorrect: false },
          { id: 4, title: 'Defines a loop', isCorrect: false },
        ],
        answer: 'Produces a value in a generator',
      },
    ],
  },
  {
    id: 8,
    title: 'Python Intermediate Quiz 8',
    category: 'Python',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of the `pass` statement in Python?',
        options: [
          { id: 1, title: 'Exits a loop', isCorrect: false },
          { id: 2, title: 'Acts as a placeholder', isCorrect: true },
          { id: 3, title: 'Raises an exception', isCorrect: false },
          { id: 4, title: 'Returns a value', isCorrect: false },
        ],
        answer: 'Acts as a placeholder',
      },
      {
        id: 2,
        title: 'What does the `filter()` function do in Python?',
        options: [
          { id: 1, title: 'Sorts a list', isCorrect: false },
          {
            id: 2,
            title: 'Selects elements based on a condition',
            isCorrect: true,
          },
          { id: 3, title: 'Maps values to a new list', isCorrect: false },
          { id: 4, title: 'Removes duplicates', isCorrect: false },
        ],
        answer: 'Selects elements based on a condition',
      },
      {
        id: 3,
        title:
          'What is the output of `list(filter(lambda x: x > 2, [1, 2, 3, 4]))`?',
        options: [
          { id: 1, title: '[3, 4]', isCorrect: true },
          { id: 2, title: '[1, 2]', isCorrect: false },
          { id: 3, title: '[1, 2, 3, 4]', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: '[3, 4]',
      },
      {
        id: 4,
        title: 'What does the `__len__` method do in a Python class?',
        options: [
          { id: 1, title: 'Defines the object’s size', isCorrect: true },
          { id: 2, title: 'Initializes the object', isCorrect: false },
          { id: 3, title: 'Compares two objects', isCorrect: false },
          { id: 4, title: 'Deletes the object', isCorrect: false },
        ],
        answer: 'Defines the object’s size',
      },
      {
        id: 5,
        title: 'What is the difference between a list and a tuple in Python?',
        options: [
          {
            id: 1,
            title: 'Lists are immutable, tuples are mutable',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'Lists are mutable, tuples are immutable',
            isCorrect: true,
          },
          { id: 3, title: 'No difference', isCorrect: false },
          {
            id: 4,
            title: 'Tuples are ordered, lists are not',
            isCorrect: false,
          },
        ],
        answer: 'Lists are mutable, tuples are immutable',
      },
      {
        id: 6,
        title: 'What does the `enumerate()` function do?',
        options: [
          { id: 1, title: 'Sorts a list', isCorrect: false },
          { id: 2, title: 'Pairs indices with elements', isCorrect: true },
          { id: 3, title: 'Filters elements', isCorrect: false },
          { id: 4, title: 'Maps values', isCorrect: false },
        ],
        answer: 'Pairs indices with elements',
      },
    ],
  },

  // Advanced Python Quizzes (2 quizzes)
  {
    id: 9,
    title: 'Python Advanced Quiz 9',
    category: 'Python',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title: 'What is a metaclass in Python?',
        options: [
          {
            id: 1,
            title: 'A class that inherits from another class',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'A class that defines the behavior of classes',
            isCorrect: true,
          },
          { id: 3, title: 'A static class method', isCorrect: false },
          { id: 4, title: 'A class with private attributes', isCorrect: false },
        ],
        answer: 'A class that defines the behavior of classes',
      },
      {
        id: 2,
        title: 'What does the `@abstractmethod` decorator do?',
        options: [
          { id: 1, title: 'Makes a method private', isCorrect: false },
          {
            id: 2,
            title: 'Requires subclasses to implement the method',
            isCorrect: true,
          },
          { id: 3, title: 'Caches the method result', isCorrect: false },
          { id: 4, title: 'Converts a method to static', isCorrect: false },
        ],
        answer: 'Requires subclasses to implement the method',
      },
      {
        id: 3,
        title:
          'What is the output of `class A: pass; class B(A): pass; print(issubclass(B, A))`?',
        options: [
          { id: 1, title: 'True', isCorrect: true },
          { id: 2, title: 'False', isCorrect: false },
          { id: 3, title: 'None', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: 'True',
      },
      {
        id: 4,
        title: 'What is multiple inheritance in Python?',
        options: [
          {
            id: 1,
            title: 'Inheriting from multiple parent classes',
            isCorrect: true,
          },
          { id: 2, title: 'Overriding multiple methods', isCorrect: false },
          { id: 3, title: 'Creating multiple instances', isCorrect: false },
          { id: 4, title: 'Defining multiple constructors', isCorrect: false },
        ],
        answer: 'Inheriting from multiple parent classes',
      },
      {
        id: 5,
        title: 'What does the `property` decorator do?',
        options: [
          { id: 1, title: 'Makes a method private', isCorrect: false },
          {
            id: 2,
            title: 'Turns a method into a getter/setter',
            isCorrect: true,
          },
          { id: 3, title: 'Converts a method to static', isCorrect: false },
          { id: 4, title: 'Caches a method’s result', isCorrect: false },
        ],
        answer: 'Turns a method into a getter/setter',
      },
      {
        id: 6,
        title: 'What is the Method Resolution Order (MRO) in Python?',
        options: [
          {
            id: 1,
            title: 'The order of method execution in a loop',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'The order in which classes are searched for methods',
            isCorrect: true,
          },
          { id: 3, title: 'The order of attribute deletion', isCorrect: false },
          {
            id: 4,
            title: 'The order of object initialization',
            isCorrect: false,
          },
        ],
        answer: 'The order in which classes are searched for methods',
      },
    ],
  },
  {
    id: 10,
    title: 'Python Advanced Quiz 10',
    category: 'Python',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-python',
    questions: [
      {
        id: 1,
        title:
          'What is the purpose of the `__slots__` attribute in a Python class?',
        options: [
          { id: 1, title: 'To define class methods', isCorrect: false },
          {
            id: 2,
            title: 'To restrict dynamic attribute creation',
            isCorrect: true,
          },
          { id: 3, title: 'To enable multiple inheritance', isCorrect: false },
          { id: 4, title: 'To cache method results', isCorrect: false },
        ],
        answer: 'To restrict dynamic attribute creation',
      },
      {
        id: 2,
        title: 'What does the `@staticmethod` decorator do?',
        options: [
          { id: 1, title: 'Requires a class instance', isCorrect: false },
          {
            id: 2,
            title: 'Does not require a class or instance',
            isCorrect: true,
          },
          { id: 3, title: 'Makes a method abstract', isCorrect: false },
          { id: 4, title: 'Hides the method', isCorrect: false },
        ],
        answer: 'Does not require a class or instance',
      },
      {
        id: 3,
        title: 'What is the diamond problem in multiple inheritance?',
        options: [
          { id: 1, title: 'A memory leak issue', isCorrect: false },
          { id: 2, title: 'Ambiguity in method resolution', isCorrect: true },
          { id: 3, title: 'A syntax error', isCorrect: false },
          { id: 4, title: 'A performance bottleneck', isCorrect: false },
        ],
        answer: 'Ambiguity in method resolution',
      },
      {
        id: 4,
        title:
          'What is the output of `class A: x = 1; a = A(); a.x = 2; print(A.x)`?',
        options: [
          { id: 1, title: '1', isCorrect: true },
          { id: 2, title: '2', isCorrect: false },
          { id: 3, title: 'None', isCorrect: false },
          { id: 4, title: 'Error', isCorrect: false },
        ],
        answer: '1',
      },
      {
        id: 5,
        title: 'What does the `__getattr__` method do?',
        options: [
          { id: 1, title: 'Defines a setter for attributes', isCorrect: false },
          {
            id: 2,
            title: 'Handles access to undefined attributes',
            isCorrect: true,
          },
          { id: 3, title: 'Initializes class attributes', isCorrect: false },
          { id: 4, title: 'Deletes attributes', isCorrect: false },
        ],
        answer: 'Handles access to undefined attributes',
      },
      {
        id: 6,
        title: 'How does Python resolve the diamond problem?',
        options: [
          { id: 1, title: 'By ignoring parent classes', isCorrect: false },
          { id: 2, title: 'Using C3 linearization (MRO)', isCorrect: true },
          { id: 3, title: 'By raising an error', isCorrect: false },
          { id: 4, title: 'By random selection', isCorrect: false },
        ],
        answer: 'Using C3 linearization (MRO)',
      },
    ],
  },

  // Beginner Quizzes
  {
    id: 14,
    title: 'Angular Beginner Quiz 1',
    category: 'Angular',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of the `ng serve` command in Angular?',
        options: [
          { id: 1, title: 'To create a new project', isCorrect: false },
          { id: 2, title: 'To start a development server', isCorrect: true },
          {
            id: 3,
            title: 'To build the project for production',
            isCorrect: false,
          },
          { id: 4, title: 'To run unit tests', isCorrect: false },
        ],
        answer: 'To start a development server',
      },
      {
        id: 2,
        title: 'What is an Angular directive?',
        options: [
          {
            id: 1,
            title: 'A class that handles HTTP requests',
            isCorrect: false,
          },
          { id: 2, title: 'A component for routing', isCorrect: false },
          { id: 3, title: 'A way to extend HTML behavior', isCorrect: true },
          {
            id: 4,
            title: 'A service for dependency injection',
            isCorrect: false,
          },
        ],
        answer: 'A way to extend HTML behavior',
      },
      {
        id: 3,
        title: 'Which file defines the root module of an Angular application?',
        options: [
          { id: 1, title: 'app.component.ts', isCorrect: false },
          { id: 2, title: 'app.module.ts', isCorrect: true },
          { id: 3, title: 'main.ts', isCorrect: false },
          { id: 4, title: 'index.html', isCorrect: false },
        ],
        answer: 'app.module.ts',
      },
      {
        id: 4,
        title: 'What is the purpose of `[(ngModel)]` in Angular?',
        options: [
          { id: 1, title: 'To bind events', isCorrect: false },
          { id: 2, title: 'To enable two-way data binding', isCorrect: true },
          {
            id: 3,
            title: 'To conditionally display elements',
            isCorrect: false,
          },
          { id: 4, title: 'To apply styles', isCorrect: false },
        ],
        answer: 'To enable two-way data binding',
      },
      {
        id: 5,
        title: 'Which Angular CLI command generates a new component?',
        options: [
          { id: 1, title: 'ng generate component', isCorrect: true },
          { id: 2, title: 'ng new component', isCorrect: false },
          { id: 3, title: 'ng create component', isCorrect: false },
          { id: 4, title: 'ng add component', isCorrect: false },
        ],
        answer: 'ng generate component',
      },
      {
        id: 6,
        title: 'What does the `*ngIf` directive do in Angular?',
        options: [
          { id: 1, title: 'Iterates over a list', isCorrect: false },
          {
            id: 2,
            title: 'Conditionally displays an element',
            isCorrect: true,
          },
          { id: 3, title: 'Binds data to a property', isCorrect: false },
          { id: 4, title: 'Triggers an event', isCorrect: false },
        ],
        answer: 'Conditionally displays an element',
      },
    ],
  },
  {
    id: 15,
    title: 'Angular Beginner Quiz 2',
    category: 'Angular',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the main programming language used in Angular?',
        options: [
          { id: 1, title: 'JavaScript', isCorrect: false },
          { id: 2, title: 'TypeScript', isCorrect: true },
          { id: 3, title: 'Python', isCorrect: false },
          { id: 4, title: 'Java', isCorrect: false },
        ],
        answer: 'TypeScript',
      },
      {
        id: 2,
        title: 'What is the role of `app.component.ts` in an Angular project?',
        options: [
          { id: 1, title: 'Defines the root component', isCorrect: true },
          { id: 2, title: 'Configures routing', isCorrect: false },
          { id: 3, title: 'Manages services', isCorrect: false },
          { id: 4, title: 'Handles HTTP requests', isCorrect: false },
        ],
        answer: 'Defines the root component',
      },
      {
        id: 3,
        title: 'Which file is the entry point for an Angular application?',
        options: [
          { id: 1, title: 'index.html', isCorrect: true },
          { id: 2, title: 'app.module.ts', isCorrect: false },
          { id: 3, title: 'main.ts', isCorrect: false },
          { id: 4, title: 'styles.css', isCorrect: false },
        ],
        answer: 'index.html',
      },
      {
        id: 4,
        title: 'What does `[ngClass]` do in Angular?',
        options: [
          { id: 1, title: 'Binds events', isCorrect: false },
          {
            id: 2,
            title: 'Conditionally applies CSS classes',
            isCorrect: true,
          },
          { id: 3, title: 'Iterates over elements', isCorrect: false },
          { id: 4, title: 'Hides elements', isCorrect: false },
        ],
        answer: 'Conditionally applies CSS classes',
      },
      {
        id: 5,
        title: 'What is the purpose of the `selector` property in a component?',
        options: [
          { id: 1, title: 'Defines the component’s CSS', isCorrect: false },
          {
            id: 2,
            title: 'Sets the HTML tag for the component',
            isCorrect: true,
          },
          { id: 3, title: 'Configures routing', isCorrect: false },
          { id: 4, title: 'Injects dependencies', isCorrect: false },
        ],
        answer: 'Sets the HTML tag for the component',
      },
      {
        id: 6,
        title: 'What is one-way data binding in Angular?',
        options: [
          { id: 1, title: 'Synchronizing data both ways', isCorrect: false },
          {
            id: 2,
            title: 'Binding data from component to template',
            isCorrect: true,
          },
          { id: 3, title: 'Binding events to methods', isCorrect: false },
          { id: 4, title: 'Fetching data from a server', isCorrect: false },
        ],
        answer: 'Binding data from component to template',
      },
    ],
  },
  {
    id: 16,
    title: 'Angular Beginner Quiz 3',
    category: 'Angular',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What does the Angular CLI stand for?',
        options: [
          { id: 1, title: 'Command Line Interface', isCorrect: true },
          { id: 2, title: 'Component Library Interface', isCorrect: false },
          { id: 3, title: 'Code Learning Interface', isCorrect: false },
          {
            id: 4,
            title: 'Configuration Language Interface',
            isCorrect: false,
          },
        ],
        answer: 'Command Line Interface',
      },
      {
        id: 2,
        title:
          'Which Angular feature allows you to bind a property to an element?',
        options: [
          { id: 1, title: 'Event binding', isCorrect: false },
          { id: 2, title: 'Property binding', isCorrect: true },
          { id: 3, title: 'Two-way binding', isCorrect: false },
          { id: 4, title: 'Structural directive', isCorrect: false },
        ],
        answer: 'Property binding',
      },
      {
        id: 3,
        title: 'What is the purpose of `main.ts` in an Angular project?',
        options: [
          { id: 1, title: 'Defines the root component', isCorrect: false },
          {
            id: 2,
            title: 'Bootstraps the Angular application',
            isCorrect: true,
          },
          { id: 3, title: 'Configures routing', isCorrect: false },
          { id: 4, title: 'Manages styles', isCorrect: false },
        ],
        answer: 'Bootstraps the Angular application',
      },
      {
        id: 4,
        title: 'Which symbol is used for event binding in Angular templates?',
        options: [
          { id: 1, title: '[]', isCorrect: false },
          { id: 2, title: '()', isCorrect: true },
          { id: 3, title: '{{}}', isCorrect: false },
          { id: 4, title: '{}', isCorrect: false },
        ],
        answer: '()',
      },
      {
        id: 5,
        title: 'What is the default style encapsulation in Angular components?',
        options: [
          { id: 1, title: 'None', isCorrect: false },
          { id: 2, title: 'Emulated', isCorrect: true },
          { id: 3, title: 'ShadowDom', isCorrect: false },
          { id: 4, title: 'Global', isCorrect: false },
        ],
        answer: 'Emulated',
      },
      {
        id: 6,
        title: 'What does the `ng build` command do?',
        options: [
          { id: 1, title: 'Starts a development server', isCorrect: false },
          { id: 2, title: 'Compiles the application', isCorrect: true },
          { id: 3, title: 'Runs unit tests', isCorrect: false },
          { id: 4, title: 'Generates a new component', isCorrect: false },
        ],
        answer: 'Compiles the application',
      },
    ],
  },
  {
    id: 17,
    title: 'Angular Beginner Quiz 4',
    category: 'Angular',
    difficulty: 'Beginner',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title:
          'What is the purpose of the `templateUrl` property in a component?',
        options: [
          {
            id: 1,
            title: 'Specifies the component’s CSS file',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'Defines the component’s HTML template',
            isCorrect: true,
          },
          {
            id: 3,
            title: 'Sets the component’s TypeScript file',
            isCorrect: false,
          },
          {
            id: 4,
            title: 'Configures the component’s routing',
            isCorrect: false,
          },
        ],
        answer: 'Defines the component’s HTML template',
      },
      {
        id: 2,
        title: 'What is interpolation in Angular?',
        options: [
          { id: 1, title: 'Binding events to methods', isCorrect: false },
          {
            id: 2,
            title: 'Displaying component data in the template',
            isCorrect: true,
          },
          {
            id: 3,
            title: 'Conditionally rendering elements',
            isCorrect: false,
          },
          { id: 4, title: 'Applying styles dynamically', isCorrect: false },
        ],
        answer: 'Displaying component data in the template',
      },
      {
        id: 3,
        title: 'Which Angular CLI command runs unit tests?',
        options: [
          { id: 1, title: 'ng test', isCorrect: true },
          { id: 2, title: 'ng serve', isCorrect: false },
          { id: 3, title: 'ng build', isCorrect: false },
          { id: 4, title: 'ng lint', isCorrect: false },
        ],
        answer: 'ng test',
      },
      {
        id: 4,
        title: 'What is the purpose of the `styles` property in a component?',
        options: [
          { id: 1, title: 'Defines inline HTML', isCorrect: false },
          { id: 2, title: 'Specifies component-specific CSS', isCorrect: true },
          { id: 3, title: 'Configures routing', isCorrect: false },
          { id: 4, title: 'Binds data to the template', isCorrect: false },
        ],
        answer: 'Specifies component-specific CSS',
      },
      {
        id: 5,
        title: 'What is the default port for the `ng serve` command?',
        options: [
          { id: 1, title: '3000', isCorrect: false },
          { id: 2, title: '4200', isCorrect: true },
          { id: 3, title: '8080', isCorrect: false },
          { id: 4, title: '5000', isCorrect: false },
        ],
        answer: '4200',
      },
      {
        id: 6,
        title:
          'Which decorator is used to mark a class as an Angular directive?',
        options: [
          { id: 1, title: '@Component', isCorrect: false },
          { id: 2, title: '@Directive', isCorrect: true },
          { id: 3, title: '@Module', isCorrect: false },
          { id: 4, title: '@Service', isCorrect: false },
        ],
        answer: '@Directive',
      },
    ],
  },
  // Intermediate Quizzes
  {
    id: 18,
    title: 'Angular Intermediate Quiz 1',
    category: 'Angular',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of the `RouterModule` in Angular?',
        options: [
          { id: 1, title: 'To manage HTTP requests', isCorrect: false },
          { id: 2, title: 'To configure application routing', isCorrect: true },
          { id: 3, title: 'To create services', isCorrect: false },
          { id: 4, title: 'To handle form validation', isCorrect: false },
        ],
        answer: 'To configure application routing',
      },
      {
        id: 2,
        title: 'What is a pipe in Angular?',
        options: [
          { id: 1, title: 'A service for data fetching', isCorrect: false },
          {
            id: 2,
            title: 'A way to transform data in templates',
            isCorrect: true,
          },
          { id: 3, title: 'A routing mechanism', isCorrect: false },
          { id: 4, title: 'A directive for events', isCorrect: false },
        ],
        answer: 'A way to transform data in templates',
      },
      {
        id: 3,
        title: 'Which decorator is used to inject a service into a component?',
        options: [
          { id: 1, title: '@Injectable', isCorrect: false },
          { id: 2, title: '@Inject', isCorrect: true },
          { id: 3, title: '@Component', isCorrect: false },
          { id: 4, title: '@Module', isCorrect: false },
        ],
        answer: '@Inject',
      },
      {
        id: 4,
        title: 'What is the purpose of `FormGroup` in Angular reactive forms?',
        options: [
          { id: 1, title: 'To validate HTTP requests', isCorrect: false },
          { id: 2, title: 'To group form controls', isCorrect: true },
          { id: 3, title: 'To style form elements', isCorrect: false },
          { id: 4, title: 'To bind events', isCorrect: false },
        ],
        answer: 'To group form controls',
      },
      {
        id: 5,
        title: 'What does the `ActivatedRoute` service provide?',
        options: [
          { id: 1, title: 'HTTP request handling', isCorrect: false },
          { id: 2, title: 'Access to route parameters', isCorrect: true },
          { id: 3, title: 'Form validation', isCorrect: false },
          { id: 4, title: 'Component lifecycle hooks', isCorrect: false },
        ],
        answer: 'Access to route parameters',
      },
      {
        id: 6,
        title:
          'What is the difference between template-driven and reactive forms?',
        options: [
          {
            id: 1,
            title: 'Template-driven forms are synchronous',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'Reactive forms are more programmatic',
            isCorrect: true,
          },
          { id: 3, title: 'Reactive forms use directives', isCorrect: false },
          {
            id: 4,
            title: 'Template-driven forms are deprecated',
            isCorrect: false,
          },
        ],
        answer: 'Reactive forms are more programmatic',
      },
    ],
  },
  {
    id: 19,
    title: 'Angular Intermediate Quiz 2',
    category: 'Angular',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of a guard in Angular routing?',
        options: [
          { id: 1, title: 'To style routes', isCorrect: false },
          { id: 2, title: 'To control navigation access', isCorrect: true },
          { id: 3, title: 'To fetch data', isCorrect: false },
          { id: 4, title: 'To create components', isCorrect: false },
        ],
        answer: 'To control navigation access',
      },
      {
        id: 2,
        title: 'What does the `| date` pipe do in Angular?',
        options: [
          { id: 1, title: 'Formats numbers', isCorrect: false },
          { id: 2, title: 'Formats dates', isCorrect: true },
          { id: 3, title: 'Converts strings to uppercase', isCorrect: false },
          { id: 4, title: 'Filters arrays', isCorrect: false },
        ],
        answer: 'Formats dates',
      },
      {
        id: 3,
        title: 'How do you create a custom pipe in Angular?',
        options: [
          { id: 1, title: 'With @Component', isCorrect: false },
          { id: 2, title: 'With @Pipe', isCorrect: true },
          { id: 3, title: 'With @Directive', isCorrect: false },
          { id: 4, title: 'With @Service', isCorrect: false },
        ],
        answer: 'With @Pipe',
      },
      {
        id: 4,
        title: 'What is the purpose of `@Output` in Angular?',
        options: [
          { id: 1, title: 'To inject services', isCorrect: false },
          { id: 2, title: 'To emit events from a component', isCorrect: true },
          { id: 3, title: 'To bind properties', isCorrect: false },
          { id: 4, title: 'To configure routing', isCorrect: false },
        ],
        answer: 'To emit events from a component',
      },
      {
        id: 5,
        title: 'What is a provider in Angular?',
        options: [
          { id: 1, title: 'A component for rendering', isCorrect: false },
          {
            id: 2,
            title: 'A configuration for dependency injection',
            isCorrect: true,
          },
          { id: 3, title: 'A directive for styling', isCorrect: false },
          { id: 4, title: 'A pipe for data transformation', isCorrect: false },
        ],
        answer: 'A configuration for dependency injection',
      },
      {
        id: 6,
        title: 'What does the `ngOnInit` lifecycle hook do?',
        options: [
          { id: 1, title: 'Destroys the component', isCorrect: false },
          { id: 2, title: 'Initializes the component', isCorrect: true },
          { id: 3, title: 'Handles events', isCorrect: false },
          { id: 4, title: 'Renders the template', isCorrect: false },
        ],
        answer: 'Initializes the component',
      },
    ],
  },
  {
    id: 20,
    title: 'Angular Intermediate Quiz 3',
    category: 'Angular',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of `ViewChild` in Angular?',
        options: [
          {
            id: 1,
            title: 'To access child components or DOM elements',
            isCorrect: true,
          },
          { id: 2, title: 'To create new components', isCorrect: false },
          { id: 3, title: 'To handle HTTP requests', isCorrect: false },
          { id: 4, title: 'To configure routing', isCorrect: false },
        ],
        answer: 'To access child components or DOM elements',
      },
      {
        id: 2,
        title: 'What is the difference between `@Input` and `@Output`?',
        options: [
          {
            id: 1,
            title: '@Input binds events, @Output binds data',
            isCorrect: false,
          },
          {
            id: 2,
            title: '@Input passes data, @Output emits events',
            isCorrect: true,
          },
          {
            id: 3,
            title: '@Input creates services, @Output injects them',
            isCorrect: false,
          },
          {
            id: 4,
            title: '@Input configures routes, @Output styles them',
            isCorrect: false,
          },
        ],
        answer: '@Input passes data, @Output emits events',
      },
      {
        id: 3,
        title: 'What is the purpose of the `FormsModule` in Angular?',
        options: [
          { id: 1, title: 'To handle routing', isCorrect: false },
          { id: 2, title: 'To enable template-driven forms', isCorrect: true },
          { id: 3, title: 'To make HTTP requests', isCorrect: false },
          { id: 4, title: 'To create pipes', isCorrect: false },
        ],
        answer: 'To enable template-driven forms',
      },
      {
        id: 4,
        title: 'What does the `Router` service do in Angular?',
        options: [
          { id: 1, title: 'Manages form validation', isCorrect: false },
          { id: 2, title: 'Navigates between routes', isCorrect: true },
          { id: 3, title: 'Handles HTTP requests', isCorrect: false },
          { id: 4, title: 'Creates components', isCorrect: false },
        ],
        answer: 'Navigates between routes',
      },
      {
        id: 5,
        title: 'What is a structural directive in Angular?',
        options: [
          { id: 1, title: 'A directive that binds events', isCorrect: false },
          {
            id: 2,
            title: 'A directive that modifies the DOM structure',
            isCorrect: true,
          },
          {
            id: 3,
            title: 'A directive that styles elements',
            isCorrect: false,
          },
          {
            id: 4,
            title: 'A directive that injects services',
            isCorrect: false,
          },
        ],
        answer: 'A directive that modifies the DOM structure',
      },
      {
        id: 6,
        title: 'What is the purpose of `ng-container` in Angular?',
        options: [
          { id: 1, title: 'To create a new component', isCorrect: false },
          {
            id: 2,
            title: 'To group elements without adding DOM nodes',
            isCorrect: true,
          },
          { id: 3, title: 'To handle HTTP requests', isCorrect: false },
          { id: 4, title: 'To bind properties', isCorrect: false },
        ],
        answer: 'To group elements without adding DOM nodes',
      },
    ],
  },
  {
    id: 21,
    title: 'Angular Intermediate Quiz 4',
    category: 'Angular',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of `ReactiveFormsModule` in Angular?',
        options: [
          { id: 1, title: 'To enable template-driven forms', isCorrect: false },
          { id: 2, title: 'To enable reactive forms', isCorrect: true },
          { id: 3, title: 'To configure routing', isCorrect: false },
          { id: 4, title: 'To handle HTTP requests', isCorrect: false },
        ],
        answer: 'To enable reactive forms',
      },
      {
        id: 2,
        title: 'What does the `CanActivate` guard do in Angular?',
        options: [
          { id: 1, title: 'Fetches data before routing', isCorrect: false },
          { id: 2, title: 'Controls access to a route', isCorrect: true },
          { id: 3, title: 'Loads modules lazily', isCorrect: false },
          { id: 4, title: 'Styles routes', isCorrect: false },
        ],
        answer: 'Controls access to a route',
      },
      {
        id: 3,
        title: 'What is a pure pipe in Angular?',
        options: [
          {
            id: 1,
            title: 'A pipe that transforms data asynchronously',
            isCorrect: false,
          },
          {
            id: 2,
            title: 'A pipe that only runs when inputs change',
            isCorrect: true,
          },
          { id: 3, title: 'A pipe that modifies the DOM', isCorrect: false },
          { id: 4, title: 'A pipe that handles events', isCorrect: false },
        ],
        answer: 'A pipe that only runs when inputs change',
      },
      {
        id: 4,
        title: 'What is the purpose of `@HostListener` in Angular?',
        options: [
          { id: 1, title: 'To inject services', isCorrect: false },
          {
            id: 2,
            title: 'To listen to DOM events on the host element',
            isCorrect: true,
          },
          { id: 3, title: 'To bind properties', isCorrect: false },
          { id: 4, title: 'To configure routing', isCorrect: false },
        ],
        answer: 'To listen to DOM events on the host element',
      },
      {
        id: 5,
        title: 'What does the `ngModelChange` event do in Angular?',
        options: [
          {
            id: 1,
            title: 'Triggers when a component is initialized',
            isCorrect: false,
          },
          { id: 2, title: 'Fires when ngModel value changes', isCorrect: true },
          { id: 3, title: 'Handles HTTP responses', isCorrect: false },
          { id: 4, title: 'Configures routing', isCorrect: false },
        ],
        answer: 'Fires when ngModel value changes',
      },
      {
        id: 6,
        title:
          'What is the purpose of the `providedIn` property in `@Injectable`?',
        options: [
          { id: 1, title: 'To style services', isCorrect: false },
          { id: 2, title: 'To specify the service’s scope', isCorrect: true },
          { id: 3, title: 'To create components', isCorrect: false },
          { id: 4, title: 'To handle events', isCorrect: false },
        ],
        answer: 'To specify the service’s scope',
      },
    ],
  },
  {
    id: 22,
    title: 'Angular Intermediate Quiz 5',
    category: 'Angular',
    difficulty: 'Intermediate',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of the `Location` service in Angular?',
        options: [
          { id: 1, title: 'To handle HTTP requests', isCorrect: false },
          {
            id: 2,
            title: 'To interact with the browser’s URL',
            isCorrect: true,
          },
          { id: 3, title: 'To create components', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To interact with the browser’s URL',
      },
      {
        id: 2,
        title: 'What does the `| async` pipe do in Angular?',
        options: [
          { id: 1, title: 'Formats dates', isCorrect: false },
          { id: 2, title: 'Subscribes to Observables', isCorrect: true },
          { id: 3, title: 'Binds events', isCorrect: false },
          { id: 4, title: 'Transforms strings', isCorrect: false },
        ],
        answer: 'Subscribes to Observables',
      },
      {
        id: 3,
        title: 'What is the purpose of `NgForm` in Angular?',
        options: [
          { id: 1, title: 'To handle routing', isCorrect: false },
          { id: 2, title: 'To manage template-driven forms', isCorrect: true },
          { id: 3, title: 'To create pipes', isCorrect: false },
          { id: 4, title: 'To inject services', isCorrect: false },
        ],
        answer: 'To manage template-driven forms',
      },
      {
        id: 4,
        title: 'What is a route parameter in Angular?',
        options: [
          { id: 1, title: 'A static route path', isCorrect: false },
          { id: 2, title: 'A dynamic segment of a URL', isCorrect: true },
          { id: 3, title: 'A component property', isCorrect: false },
          { id: 4, title: 'A service configuration', isCorrect: false },
        ],
        answer: 'A dynamic segment of a URL',
      },
      {
        id: 5,
        title: 'What does the `Renderer2` class do in Angular?',
        options: [
          { id: 1, title: 'Handles routing', isCorrect: false },
          { id: 2, title: 'Safely manipulates the DOM', isCorrect: true },
          { id: 3, title: 'Creates services', isCorrect: false },
          { id: 4, title: 'Validates forms', isCorrect: false },
        ],
        answer: 'Safely manipulates the DOM',
      },
      {
        id: 6,
        title: 'What is the purpose of `@HostBinding` in Angular?',
        options: [
          { id: 1, title: 'To inject services', isCorrect: false },
          {
            id: 2,
            title: 'To bind properties to the host element',
            isCorrect: true,
          },
          { id: 3, title: 'To emit events', isCorrect: false },
          { id: 4, title: 'To configure routing', isCorrect: false },
        ],
        answer: 'To bind properties to the host element',
      },
    ],
  },
  // Advanced Quizzes
  {
    id: 23,
    title: 'Angular Advanced Quiz 1',
    category: 'Angular',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of `CanDeactivate` guard in Angular?',
        options: [
          { id: 1, title: 'To fetch data before routing', isCorrect: false },
          { id: 2, title: 'To prevent leaving a route', isCorrect: true },
          { id: 3, title: 'To load modules lazily', isCorrect: false },
          { id: 4, title: 'To style routes', isCorrect: false },
        ],
        answer: 'To prevent leaving a route',
      },
      {
        id: 2,
        title: 'What is the benefit of using `trackBy` with `*ngFor`?',
        options: [
          { id: 1, title: 'Improves routing performance', isCorrect: false },
          { id: 2, title: 'Optimizes DOM updates', isCorrect: true },
          { id: 3, title: 'Handles HTTP requests', isCorrect: false },
          { id: 4, title: 'Validates forms', isCorrect: false },
        ],
        answer: 'Optimizes DOM updates',
      },
      {
        id: 3,
        title: 'What is a custom validator in Angular forms?',
        options: [
          { id: 1, title: 'A service for routing', isCorrect: false },
          { id: 2, title: 'A function to enforce form rules', isCorrect: true },
          { id: 3, title: 'A directive for styling', isCorrect: false },
          { id: 4, title: 'A pipe for data transformation', isCorrect: false },
        ],
        answer: 'A function to enforce form rules',
      },
      {
        id: 4,
        title: 'What is the purpose of `ViewContainerRef` in Angular?',
        options: [
          { id: 1, title: 'To handle HTTP requests', isCorrect: false },
          { id: 2, title: 'To manage dynamic components', isCorrect: true },
          { id: 3, title: 'To configure routing', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To manage dynamic components',
      },
      {
        id: 5,
        title: 'What does the `merge` operator do in RxJS?',
        options: [
          { id: 1, title: 'Filters Observables', isCorrect: false },
          { id: 2, title: 'Combines multiple Observables', isCorrect: true },
          { id: 3, title: 'Delays emissions', isCorrect: false },
          { id: 4, title: 'Maps values', isCorrect: false },
        ],
        answer: 'Combines multiple Observables',
      },
      {
        id: 6,
        title: 'What is the purpose of `APP_INITIALIZER` in Angular?',
        options: [
          { id: 1, title: 'To create components', isCorrect: false },
          { id: 2, title: 'To run initialization logic', isCorrect: true },
          { id: 3, title: 'To handle routing', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To run initialization logic',
      },
    ],
  },
  {
    id: 24,
    title: 'Angular Advanced Quiz 2',
    category: 'Angular',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of `ngZone.runOutsideAngular`?',
        options: [
          { id: 1, title: 'To trigger change detection', isCorrect: false },
          {
            id: 2,
            title: 'To run code outside Angular’s zone',
            isCorrect: true,
          },
          { id: 3, title: 'To handle HTTP requests', isCorrect: false },
          { id: 4, title: 'To create components', isCorrect: false },
        ],
        answer: 'To run code outside Angular’s zone',
      },
      {
        id: 2,
        title: 'What is a preloading strategy in Angular routing?',
        options: [
          { id: 1, title: 'A way to style routes', isCorrect: false },
          {
            id: 2,
            title: 'A method to load modules in advance',
            isCorrect: true,
          },
          { id: 3, title: 'A guard for authentication', isCorrect: false },
          { id: 4, title: 'A resolver for data', isCorrect: false },
        ],
        answer: 'A method to load modules in advance',
      },
      {
        id: 3,
        title: 'What does the `switchMap` operator do in RxJS?',
        options: [
          { id: 1, title: 'Merges multiple Observables', isCorrect: false },
          {
            id: 2,
            title: 'Maps and switches to a new Observable',
            isCorrect: true,
          },
          { id: 3, title: 'Filters emissions', isCorrect: false },
          { id: 4, title: 'Delays emissions', isCorrect: false },
        ],
        answer: 'Maps and switches to a new Observable',
      },
      {
        id: 4,
        title: 'What is the purpose of `ComponentFactoryResolver` in Angular?',
        options: [
          { id: 1, title: 'To handle routing', isCorrect: false },
          { id: 2, title: 'To create dynamic components', isCorrect: true },
          { id: 3, title: 'To validate forms', isCorrect: false },
          { id: 4, title: 'To manage services', isCorrect: false },
        ],
        answer: 'To create dynamic components',
      },
      {
        id: 5,
        title: 'What is tree shaking in Angular?',
        options: [
          { id: 1, title: 'A styling technique', isCorrect: false },
          {
            id: 2,
            title: 'Removing unused code during build',
            isCorrect: true,
          },
          { id: 3, title: 'A routing strategy', isCorrect: false },
          { id: 4, title: 'A form validation method', isCorrect: false },
        ],
        answer: 'Removing unused code during build',
      },
      {
        id: 6,
        title: 'What is the purpose of `ng-content` in Angular?',
        options: [
          { id: 1, title: 'To handle HTTP requests', isCorrect: false },
          {
            id: 2,
            title: 'To project content into a component',
            isCorrect: true,
          },
          { id: 3, title: 'To create services', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To project content into a component',
      },
    ],
  },
  {
    id: 25,
    title: 'Angular Advanced Quiz 3',
    category: 'Angular',
    difficulty: 'Advanced',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-angular',
    questions: [
      {
        id: 1,
        title: 'What is the purpose of `CanLoad` guard in Angular?',
        options: [
          {
            id: 1,
            title: 'To prevent loading of lazy-loaded modules',
            isCorrect: true,
          },
          { id: 2, title: 'To fetch data before routing', isCorrect: false },
          { id: 3, title: 'To style routes', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To prevent loading of lazy-loaded modules',
      },
      {
        id: 2,
        title: 'What does the `debounceTime` operator do in RxJS?',
        options: [
          { id: 1, title: 'Merges Observables', isCorrect: false },
          {
            id: 2,
            title: 'Delays emissions until a period of silence',
            isCorrect: true,
          },
          { id: 3, title: 'Filters emissions', isCorrect: false },
          { id: 4, title: 'Maps values', isCorrect: false },
        ],
        answer: 'Delays emissions until a period of silence',
      },
      {
        id: 3,
        title: 'What is the purpose of `ng-template` in Angular?',
        options: [
          { id: 1, title: 'To handle HTTP requests', isCorrect: false },
          {
            id: 2,
            title: 'To define reusable template fragments',
            isCorrect: true,
          },
          { id: 3, title: 'To create services', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To define reusable template fragments',
      },
      {
        id: 4,
        title:
          "What is the benefit of using `providedIn: 'root'` in Angular services?",
        options: [
          { id: 1, title: 'Enables lazy loading', isCorrect: false },
          { id: 2, title: 'Ensures a singleton instance', isCorrect: true },
          { id: 3, title: 'Styles the service', isCorrect: false },
          { id: 4, title: 'Validates forms', isCorrect: false },
        ],
        answer: 'Ensures a singleton instance',
      },
      {
        id: 5,
        title: 'What is Ahead-of-Time (AOT) compilation in Angular?',
        options: [
          { id: 1, title: 'A styling technique', isCorrect: false },
          { id: 2, title: 'Compiling templates during build', isCorrect: true },
          { id: 3, title: 'A routing strategy', isCorrect: false },
          { id: 4, title: 'A form validation method', isCorrect: false },
        ],
        answer: 'Compiling templates during build',
      },
      {
        id: 6,
        title: 'What is the purpose of `ChangeDetectorRef` in Angular?',
        options: [
          { id: 1, title: 'To handle HTTP requests', isCorrect: false },
          {
            id: 2,
            title: 'To manually trigger change detection',
            isCorrect: true,
          },
          { id: 3, title: 'To create services', isCorrect: false },
          { id: 4, title: 'To validate forms', isCorrect: false },
        ],
        answer: 'To manually trigger change detection',
      },
    ],
  },
];

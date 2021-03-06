module.exports = {
  "root": true,
  "env": {
    "commonjs": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "sourceType": "script",
    "allowImportExportEverywhere": true
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-console": ["warn", {"allow": ["warn", "error"]}],
    "semi": ["error", "never"],
    "strict": ["error", "global"],
    "no-trailing-spaces": ["error", {"skipBlankLines": true}],
    "quotes": ["error", "single"],
    "no-template-curly-in-string": "error",
    "no-caller": "error",
    "yoda": "error",
    "eqeqeq": ["error", "always"],
    "brace-style": "error",
    "eol-last": "error",
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "MemberExpression": 1,
      "outerIIFEBody": 1,
      "CallExpression": {"arguments": 1},
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "FunctionExpression": {"body": 1, "parameters": "first"}
    }],
    "comma-style": ["error", "last"],
    "no-var": "error",
    "array-bracket-spacing": ["error", "never"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "one-var": ["error", "never"],
    "no-extra-bind": "error",
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "no-process-exit": "error",
    "space-in-parens": "error",
    "no-unused-vars": ["error", {"caughtErrors": "all"}],
    "key-spacing": "error",
    "space-infix-ops": ["error", {"int32Hint": false}],
    "no-loop-func": "error",
    "space-before-function-paren": ["error", "never"],
    "space-before-blocks": "error",
    "object-curly-spacing": "error",
    "keyword-spacing": ["error", {"after": true}],
  }
};
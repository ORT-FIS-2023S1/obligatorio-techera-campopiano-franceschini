module.exports = {
  root: true,
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    indent: ['error', 2],
    'max-len': ['error', {code: 120}],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'new-cap': 0,
  },
};

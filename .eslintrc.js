module.exports = {
   env: {
      browser: true,
      es2021: true,
      jest: true
   },
   extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:i18next/recommended'
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
   },
   plugins: ['react', '@typescript-eslint', 'i18next'],
   rules: {
      'i18next/no-literal-string': ['warn', { markupOnly: true }],
      'react/jsx-indent': [2, 3],
      'react/jsx-indent-props': [2, 3],
      indent: [2, 3],
      'react/jsx-filename-extension': [
         2,
         { extensions: ['.js', '.jsx', '.tsx'] }
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'react/require-default-props': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react/function-component-definition': 'off',
      'no-shadow': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-underscore-dangle': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      'comma-dangle': ['error', 'never'],
      'linebreak-style': 'off',
      'object-curly-newline': 'off',
      'react/prop-types': 'warn',
      'import/order': 'off',
      'arrow-body-style': 'off',
      'object-shorthand': 'off',
      'operator-linebreak': 'warn',
      'implicit-arrow-linebreak': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'no-undef': 'warn',
      'no-plusplus': 'off',
      'prefer-const': 'warn',
      'no-param-reassign': 'warn',
      'react/no-array-index-key': 'warn',
      'no-return-assign': 'warn',
      'no-use-before-define': 'warn',
      'max-len': ['warn', { ignoreComments: true, code: 100 }],
      'no-restricted-globals': 'warn'
   },
   globals: {
      __IS_DEV__: true
   }
};

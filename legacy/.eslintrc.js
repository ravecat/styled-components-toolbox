module.exports = {  
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/strict",
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": [
    "import",
    "jsx-a11y"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js"
        ],
        "paths": [
          "src"
        ]
      }
    }
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    "document": true,
    "window": true,
    "navigator": true,
    "it": true,
    "jest": true,
    "expect": true,
    "describe": true
  },
  "rules": {
    "eol-last": [2, "always"],
    "no-console": [2, { "allow": ["warn", "error"] }],
    "import/order": [2, {"newlines-between": "always"}],
    "react/jsx-sort-props": [2, {
      "noSortAlphabetically": false
    }],
    "no-unused-vars": [2, {
      "vars": "all",
      "args": "none",
      "ignoreRestSiblings": false
    }],
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": true
    }],
    "react/jsx-wrap-multilines": [2, {
      "assignment": "parens-new-line",
      "arrow": "parens-new-line"
    }]
  }
}




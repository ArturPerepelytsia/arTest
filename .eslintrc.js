module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "import",
    "react-native"
  ],
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "classes": true,
      "experimentalDecorators": true
    }
  },
  "extends" : [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base"
  ],
  "rules" : {
    "arrow-body-style" : "warn",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "import/default": 2,
    "import/export": 2,
    "import/imports-first": 2,
    "import/no-duplicates": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/no-unresolved": 2,
    "import/no-named-as-default": 0,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-unknown-property": 2,
    "react/prefer-stateless-function": 0,
    "react/prop-types": [2],
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 1,
    "react/jsx-no-undef": 2,
    "react/jsx-space-before-closing": [2, "always"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/display-name": [0, { "ignoreTranspilerName": true }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "prefer-const": 2,
    "max-len": [2, 120, 4],
    "no-use-before-define": 0,
    "consistent-this": [1, "self"],
    "class-methods-use-this": ["error", {
      "exceptMethods": [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount"
      ]
    }]
  }
};

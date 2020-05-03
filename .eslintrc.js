module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "mocha": true
  },
  "extends": [
		'eslint:recommended',
		'plugin:react/recommended'
	],
  'parser': "babel-eslint",
  "plugins": [
      "react",
      "mocha"
  ],
  "rules": {
      "indent": [
          "error",
          "tab"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      "react/jsx-uses-react": 2,
			"react/jsx-uses-vars": "error"
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	}
};

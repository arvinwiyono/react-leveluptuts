module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": ["react"],
  "rules": {
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx"]
      }
    ],
    "max-len": ["error", { "code": 250 }]
  }
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./__tests__",
        "@assets": "./src/assets",
        "@config": "./src/config",
        "@screens": "./src/screens",
        "@components": "./src/components",
        "@store": "./src/store",
        "@constants": "./src/constants",
        "@global": "./src/global",
        "@utils": "./src/utils",
        "@services": "./src/services",
      }
    }]
  ]
};

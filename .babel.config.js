module.exports = function (api) {
  // api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".tsx", ".ios.tsx", ".android.tsx", "js"],
          alias: {
            Assets: "./src/Views/assets",
            Components: "./src/Views/components",
            Navigations: "./src/Views/navigations",
            Http: "./src/core",
            Screens: "./src/Views/screens"
          }
        }
      ]
    ]
  };
};

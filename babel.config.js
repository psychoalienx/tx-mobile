module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./assets",
            "@atoms": "./src/components/atoms",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@enviroments": "./enviroments",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
            "@interfaces": "./src/interfaces",
            "@layouts": "./src/components/layouts",
            "@molecules": "./src/components/molecules",
            "@navigation": "./src/navigation",
            "@organisms": "./src/components/organisms",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@templates": "./src/components/templates",
            "@locales": "./locales",
            "@context": "./src/context",
          },
        },
      ],
    ],
  };
};

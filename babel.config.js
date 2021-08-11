<<<<<<< HEAD
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
=======
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  }
}
>>>>>>> 95581e506b80859bc05566545fb0267c123fced8

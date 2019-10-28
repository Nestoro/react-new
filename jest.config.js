module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)x?$",
    "globals": {
      "window": {}
    },
    "transformIgnorePatterns": [
      "node_modules/(?!react-native|react-router-native)/"
    ],
};
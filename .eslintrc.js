module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-encharted`
  extends: ['encharted'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}

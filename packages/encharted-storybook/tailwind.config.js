module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('@encharted/design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    './node_modules/@encharted/design-system/**/*.js',
  ],
}

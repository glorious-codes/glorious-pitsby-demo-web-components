module.exports = {
  projects: [
    { engine: 'vanilla', collectDocsFrom: './src' }
  ],
  scripts: [
    { src: './src/doc.importmap.js', type: 'importmap', inline: true },
    { src: './src/browser-support.js', type: 'module' },
    { src: './src/index.js', type: 'module' }
  ],
  other: [
    './src/images/logo-web-components.svg',
    './src/components/id-generator.js',
    './src/services/browser.js',
    './src/services/window.js',
    './node_modules/uuid/dist/esm-browser/v4.js',
    './node_modules/uuid/dist/esm-browser/native.js',
    './node_modules/uuid/dist/esm-browser/rng.js',
    './node_modules/uuid/dist/esm-browser/stringify.js',
    './node_modules/uuid/dist/esm-browser/validate.js',
    './node_modules/uuid/dist/esm-browser/regex.js'
  ],
  custom: {
    logo: {
      filepath: './src/images/logo-web-components.svg',
      width: '250px',
      height: '40px'
    },
    windowTitle: 'Pitsby: Web Components + ES Modules',
  },
  outputDirectory: './docs'
}

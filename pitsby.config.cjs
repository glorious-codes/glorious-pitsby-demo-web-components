module.exports = {
  projects: [
    {
      engine: 'vanilla',
      collectDocsFrom: './src',
    }
  ],
  scripts: [
    { src: './src/doc.importmap.js', type: 'importmap', inline: true },
    { src: './src/index.js', type: 'module' }
  ],
  other: [
    './src/components/id-generator.js',
    './node_modules/uuid/dist/esm-browser/'
  ],
  outputDirectory: './docs'
}

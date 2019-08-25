module.exports = {
  name: 'booziir-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/booziir-admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

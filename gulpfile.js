require('babel-register')({
  only: ['config'],
  presets: ['./config/babel/browser/dev'],
  retainLines: true,
});
require('babel-polyfill');
require('./config/gulp');

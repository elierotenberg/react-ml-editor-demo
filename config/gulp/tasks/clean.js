import gulp from 'gulp';
import path from 'path';
import rimraf from 'rimraf';

const www = path.join(
  __dirname, // /config/gulp/tasks
  '..', // /config/gulp
  '..', // /config/
  '..', // /
  'www', // /dist
);

export default () =>
  gulp.task('clean', (cb) => rimraf(www, cb))
;

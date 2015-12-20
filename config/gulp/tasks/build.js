import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import webpack from 'webpack';

import webpackConfig from '../../webpack';

const root = path.join(
  __dirname, // /config/gulp/tasks
  '..', // /config/gulp
  '..', // /config/
  '..', // /
);

const app = path.join(root, 'app');

const www = path.join(root, 'www');

const sources = [
  path.join(app, 'www', '**', '*.jsx'),
  path.join(app, 'www', '**', '*.js'),
];

const misc = sources.map((source) => `!${source}`).concat(path.join(app, 'www', '**', '*'));

function createBuild(env) {
  return (cb) => webpack(webpackConfig[env], (err) => {
    if(err) {
      throw new gutil.PluginError('webpack', err);
    }
    cb();
  })
  ;
}

export default () => {
  gulp.task('copy-misc', () =>
    gulp.src(misc)
    .pipe(gulp.dest(www))
  );
  const envs = Object.keys(webpackConfig);
  envs.forEach((env) => gulp.task(`build-${env}`, ['copy-misc'], createBuild(env)));
  gulp.task('build', envs.map((env) => `build-${env}`));
};

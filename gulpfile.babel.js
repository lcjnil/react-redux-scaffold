import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import del from 'del';
import RunSequnence from 'run-sequence';

const $ = gulpLoadPlugins();
let options = {};

gulp.task('clean', () => {
  return del(['dist/']);
});

// run webpack bundler
gulp.task('bundle', (cb) => {
  const config = require(`./webpack.${options.dist ? 'dist.' : ''}config`);
  const bundler = webpack(config);

  function bundlerCallback(err, stats) {
    console.log(stats.toString());
  }
  if (options.watch) {
    bundler.watch(200, bundlerCallback);
  } else {
    bundler.run(bundlerCallback);
  }
});

gulp.task('bundle:dist', (cb) => {
  options.dist = true;
  RunSequnence('bundle', cb);
});

gulp.task('assets', (cb) => {
  return gulp.src('src/public/**')
    .pipe(gulp.dest('dist/')).
    pipe($.size({title: 'assets'}));
});

gulp.task('build', ['clean'], () => {
  RunSequnence(['assets', 'bundle']);
});

gulp.task('copyIndex', (cb) => {
  return gulp.src(['src/index.html'])
    .pipe($.replace('assets/main.js', 'main.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build:dist', ['clean'], (cb) => {
  options.dist = true;
  RunSequnence(['assets', 'bundle', 'copyIndex'], cb)
});

gulp.task('build:watch', ['clean'], (cb) => {
  options.watch = true;
  RunSequnence(['build'], () => {
    gulp.watch('src/public/**', ['assets']);
  });
});

gulp.task('serve', () => {
  const config = require('./webpack.config');
  const bundler = webpack(config);
  let server = new WebpackDevServer(bundler, {
    contentBase: './src',
    publicPath: '/assets/',
    hot: true,
    stats: {
      colors: true
    }
  });
  server.listen(9999, 'localhost', (err) => {
    console.log('server listen at 9999');
  });
});

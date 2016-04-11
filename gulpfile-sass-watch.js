var gulp = require('gulp'); // require gulp
var sass = require('gulp-sass');
var watcher = require('gulp-watch');

// use gulp-watch to watch for changes
// the first argument is an array of strings
// that represent folders/files to watch
watcher(['./sass/*.scss'], function() {
  console.log('App has been modified... re-running tasks');
  gulp.start('scss-2-css');
});

/**
 * create a new task
 * two arguments: Name (String), callback (Function)
 */
gulp.task('default', function() {
  console.log('I am the default task. Hello. I am running.');
});

gulp.task('scss-2-css', function() {
  // have gulp fine the source (src) files
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

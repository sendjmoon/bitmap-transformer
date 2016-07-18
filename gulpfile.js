const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var allFiles = ['**/*.js', '!./node_modules/**'];
var testFiles = ['./test/**/*.js'];

gulp.task('lint', () => {
  return gulp.src(allFiles)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test:test', () => {
  return gulp.src(testFiles)
  .pipe(mocha());
});

gulp.task('default', ['lint', 'test:test']);

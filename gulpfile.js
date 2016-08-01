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

// If you don't have the eslint options listed out in your gulp file, you need to provide an eslintrc file with your project.

gulp.task('test:test', () => {
  return gulp.src(testFiles)
  .pipe(mocha());
});

gulp.task('default', ['lint', 'test:test']);

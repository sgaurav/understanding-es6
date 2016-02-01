/* global require */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var gulpIf = require('gulp-if');

// Check the main js file meets the following standards outlined in .eslintrc
gulp.task('eslint', function esLintTask() {
    // Has ESLint fixed the file contents?
    function isFixed(file) {
        return file.eslint !== undefined && file.eslint !== null && file.eslint.fixed;
    }

    // Select all js file(s)
    return gulp.src(['*.js'])
        .pipe(eslint({
            fix: true,
            useEslintrc: '.eslintrc',
        }))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, gulp.dest('./')));
});

// Register the default task
gulp.task('default', ['eslint']);

// 'gulp eslint' to check the syntax of all js file(s)

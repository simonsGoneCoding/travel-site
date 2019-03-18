var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function () {
    console.log('gulp working');
})

gulp.task('html', function () {
    console.log('something useful being done to HTML file');
})

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

})

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    })
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    })
})
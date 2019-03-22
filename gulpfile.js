'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('uglify', function () {
    gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: "../Gulp-setup"
    });

    gulp.watch(".scss/*.scss", ['sass']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});
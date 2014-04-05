var gulp = require('gulp');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

gulp.task('default', ['less', 'minifycss', 'combinejs', 'minifyjs'], function () {
    gulp.watch(['./resources/less/**/*.less'], ['less', 'minifycss']);
    gulp.watch(['./resources/javascript/reflection/*.js'], ['combinejs', 'minifyjs']);
});


gulp.task('less', function () {
    return gulp.src('./resources/less/main.less')
        .pipe(less())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./resources/css/'))
        .pipe(notify('LESS compiled Successfully'));
});

gulp.task('minifycss', ['less'], function () {
    return gulp.src('./resources/css/main.css')
        .pipe(minify())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./resources/css/'))
        .pipe(notify('CSS minified successfully'));
});

gulp.task('combinejs', function () {
    return gulp.src('./resources/javascript/reflection/*.js')
        .pipe(concat("main.js"))
        .pipe(gulp.dest("./resources/javascript/"))
        .pipe(notify("Javascript compiled successfully"));
});

gulp.task('minifyjs', ['combinejs'], function() {
    return gulp.src('./resources/javascript/main.js')
            .pipe(uglify())
            .pipe(rename("main.min.js"))
            .pipe(gulp.dest("./resources/javascript/"))
            .pipe(notify("Minified js successfully"));
});
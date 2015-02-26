var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var to5 = require('gulp-6to5');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['compile', 'min']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['compile', 'min']);
})

gulp.task('compile', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('min', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(to5())
    .pipe(uglify())
    .pipe(rename('BoolMap.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

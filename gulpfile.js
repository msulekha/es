var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('another-task', function() {
    console.log("Gulp another task....");
});

gulp.task('default', ['another-task']);



gulp.task('styles', function () {
    return gulp.src('./styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('styles:watch', function () {
    gulp.watch('./styles/sass/**/*.scss', ['styles']);
});
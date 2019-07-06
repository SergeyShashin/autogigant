var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('scss', function () {
    return gulp.src('scss/index.scss')
        .pipe(scss())
        .pipe(gulp.dest('.'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['browserSync'],  function () {
    gulp.watch('scss/index.scss', ['scss']);
    gulp.watch('index.html', browserSync.reload);
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: '.',
        }
    });
})
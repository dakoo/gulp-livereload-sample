var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
gulp.task('check', function() {
    return gulp.src(['*', 'js/*', 'css/*', 'html/*'])
        .pipe(livereload());
});
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('*', ['check']);
    gulp.watch('js/*', ['check']);
    gulp.watch('css/*', ['check']);
    gulp.watch('html/*', ['check']);
});
gulp.task('default', ['check','watch']);
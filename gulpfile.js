var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('static'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: '.'
        },
    })
    gulp.watch('scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('scripts/*.js', browserSync.reload);
})


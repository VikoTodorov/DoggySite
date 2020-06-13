var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('templates/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('templates/static'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'templates'
        },
    })
    gulp.watch('templates/scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('templates/*.html', browserSync.reload);
    gulp.watch('templates/scripts/*.js', browserSync.reload);
})


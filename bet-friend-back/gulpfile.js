var gulp = require('gulp');
var eslint = require('gulp-eslint'); // Lint your javascript

var paths = {
  jsapp : ['./js/**/*.js']
};

gulp.task('default', ['jsFiles']);

gulp.task('jsFiles', function(done) {
gulp.src(paths.jsapp)
    .pipe(eslint())
    .pipe(eslint.format())
	.on('end', done);
});
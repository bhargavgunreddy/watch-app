// gulp

var gulp = require('gulp');
var concat = require('gulp-concat');
//var jslint = require('gulp-jslint');
var jslint = require('gulp-jslint-simple');
var browserify = require('gulp-browserify');
 
// Basic usage 
gulp.task('modify', function() {
	// Single entry point to browserify 
	gulp.src('./dist/*.js')
		.pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
		.pipe(gulp.dest('./build/js'))
});
 
gulp.task('lint', function () {
    gulp.src('./dist/*.js')
        .pipe(jslint.run({
            // project-wide JSLint options 
            node: true,
            vars: true
        }))
        .pipe(jslint.report({
            // example of using a JSHint reporter 
            reporter: require('jshint-stylish').reporter
        }));
});


gulp.task('concatTask', function() {
  return gulp.src(['./js/*.js', './utility/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

/*gulp.task('jslintTask', function () {
    return gulp.src(['./js/*.js'])
            .pipe(jslint());
            
});*/
import gulp from 'gulp';

gulp.task('styles:dependencies', () => {(
	gulp.parallel(
		'sprites',
		'icons',
		'styles'
	)
)});

gulp.task('default', () => (
	gulp.series(
		[
			'styles:dependencies',
			'templates',
		],
		'server',
		'watch'
	)
));

gulp.task('build', () => (
	gulp.start(
		'styles:dependencies',
		'templates',
		'scripts',
		'copy'
	)
));

import gulp from 'gulp';
import runSequence from 'run-sequence';
import {reload} from 'browser-sync';
import gulpWatch from 'gulp-watch';

function watch() {
	global.watch = true;

	gulpWatch('app/sprites/**/*.png', () => gulp.start('sprites'));
	gulpWatch('app/{styles,blocks}/**/*.styl', () => runSequence('styles', () => reload('assets/styles/app.min.css')));
	gulpWatch(['app/{pages,blocks}/**/*.jade'], () => runSequence('templates', reload));
	gulpWatch('app/resources/**/*', () => runSequence('copy', reload));
	gulpWatch('app/icons/**/*.svg', () => runSequence('icons', reload));

	gulp.start('scripts:watch');
}

export default watch;

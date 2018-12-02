import browserSync from 'browser-sync';
import gutil from 'gulp-util';
import debuga from 'debuga';
import gulp from 'gulp';

function server() {
	browserSync.init({
		files: ['dist/**/*'],
		open: !!gutil.env.open,
		reloadOnRestart: true,
		port: gutil.env.port || 3000,
		server: {
			baseDir: [
				'app/resources',
				'dist'
			],
			directory: false,
			middleware: gutil.env.debug ? [debuga()] : []
		},
		tunnel: !!gutil.env.tunnel
	})
}

export default server;
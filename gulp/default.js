import {series, parallel} from 'gulp';
import {templates} from './templates.js';
import {server} from './server.js';
import {watch} from './watch.js';

// function stylesDependencies() {
// 	parallel(
// 		sprites,
// 		icons,
// 		styles
// 	)
// }

function defaultTask() {
	// series(
	// 	parallel(
	// 		stylesDependencies,
	// 		templates,
	// 	),
	// 	server,
	// 	watch
	// )
}

// export const build = () => series(
// 	stylesDependencies,
// 	templates,
// 	scripts,
// 	copy
// );

export default defaultTask;
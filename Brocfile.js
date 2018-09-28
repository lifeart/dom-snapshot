const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const LiveReload = require('broccoli-livereload');

const appRoot = 'src';

// Copy HTML file from app root to destination
const html = funnel(appRoot, {
	files: ['index.html'],
	destDir: '/',
	annotation: 'Index file',
});

var typescript = require('broccoli-typescript-compiler').default;

var cjsTree = typescript(appRoot, {
	tsconfig: {
		compilerOptions: {
			module: 'commonjs',
			target: 'es2017',
			inlineSources: true,
			inlineSourceMap: true,
			declaration: true,
			baseDir: 'src',
			rootDir: 'src',
			moduleResolution: 'node',
			newLine: 'LF',
			rootDir: 'src',
			outDir: 'dist',
			sourceMap: true
		},
		files: ['index.ts'],
	},
	throwOnError: false,
	annotation: 'compile program',
});

let tree = merge([html, cjsTree], {
	annotation: 'Final output'
});

tree = new LiveReload(tree, {
	target: 'index.html',
});

module.exports = tree;
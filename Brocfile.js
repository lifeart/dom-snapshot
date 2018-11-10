/* global require */
const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const LiveReload = require('broccoli-livereload');
const compileSass = require('broccoli-sass-source-maps')(require('sass'));
const typescript = require('broccoli-typescript-compiler').default;
const watchify = require('broccoli-watchify');

const appRoot = 'src';

var cjsTree = typescript(appRoot, {
	tsconfig: {
		compilerOptions: {
			module: 'commonjs',
			target: 'es5',
			moduleResolution: 'node',
			newLine: 'LF',
			rootDir: 'src',
			outDir: 'dist',
			sourceMap: true,
			declaration: true,
		},
		files: ['src/index.ts', 'src/tests/**'],
	},
	throwOnError: false,
	annotation: 'compile program',
});

// Copy HTML file from app root to destination
const html = funnel(appRoot, {
	files: ['index.html'],
	destDir: '/',
	annotation: 'Index file',
});

const css = compileSass(
	[appRoot],
	'test.scss',
	'test.css', {
		sourceMap: true,
		sourceMapContents: true,
		annotation: 'Sass files'
	}
);


// module: 'ESNext',
// target: 'es2017',
// inlineSources: true,
// inlineSourceMap: true,
// declaration: true,
// baseDir: 'src',
// rootDir: 'src',
// moduleResolution: 'ES6',
// newLine: 'LF',
// rootDir: 'src',
// outDir: 'dist',
// sourceMap: true


// module: 'commonjs',
// target: 'es2017',
// inlineSources: true,
// inlineSourceMap: true,
// declaration: true,
// baseDir: 'src',
// rootDir: 'src',
// moduleResolution: 'node',
// newLine: 'LF',
// rootDir: 'src',
// outDir: 'dist',
// sourceMap: true

// var cjsTree = typescript(appRoot, {
// 	tsconfig: {
// 		compilerOptions: {
// module: "commonjs",
// target: "es5",
// moduleResolution: "node",
// newLine: "LF",
// baseDir: 'src',
// rootDir: "src",
// outDir: "dist",
// sourceMap: true,
// declaration: true,


// module: 'commonjs',
// target: 'es2017',
// // inlineSources: true,
// // inlineSourceMap: true,
// declaration: true,
// baseDir: 'src',
// rootDir: 'src',
// noImplicitUseStrict: true,
// moduleResolution: 'ES6',
// // noEmitHelpers: true,
// // noResolve: true,
// newLine: 'LF',
// outDir: 'dist',
// sourceMap: true
// 		},
// 		files: ['index.ts'],
// 	},
// 	throwOnError: false,
// 	annotation: 'compile program',
// });

let btree = watchify(cjsTree, {
	browserify: {
		entries: ['index.js'],
		debug: true
	},
	outputFile: 'index.js',
	cache: true
});


let tree = merge([html, btree, css], {
	annotation: 'Final output'
});

tree = new LiveReload(tree, {
	target: 'index.html',
});

module.exports = tree;
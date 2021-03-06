/* global require, module */
const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const LiveReload = require('broccoli-livereload');
const compileSass = require('broccoli-sass-source-maps')(require('sass'));
const typescript = require('broccoli-typescript-compiler').default;
const watchify = require('broccoli-watchify');

const appRoot = 'src';


const cjsTree = typescript(appRoot, {
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


let browserTree = watchify(cjsTree, {
	browserify: {
		entries: ['index.js'],
		debug: true
	},
	outputFile: 'index.js',
	cache: true
});


let mergedFiles = merge([html, browserTree, css], {
	annotation: 'Final output'
});

let finalTree = new LiveReload(mergedFiles, {
	target: 'index.html',
});

module.exports = finalTree;
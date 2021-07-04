const projectFolder = 'build';
const sourceFolder = 'source';

let path = {
	source: {
		html: sourceFolder + '/*.html',
		css: sourceFolder + '/scss/style.scss',
		js: sourceFolder + '/js/script.js',
		img: sourceFolder + '/img/**/*.{jpg,png,svg,webp,gif,ico}',
		fonts: sourceFolder + '/fonts/',
	},

	build: {
		html: projectFolder + '/',
		css: projectFolder + '/css/',
		js: projectFolder + '/js/',
		fonts: projectFolder + '/fonts/',
		img: projectFolder + '/img',
	},

	watch: {
		html: sourceFolder + '/**/*.html',
		css: sourceFolder + '/scss/**/*.scss',
		js: sourceFolder + '/js/**/*.js',
		img: sourceFolder + '/img/**/*.{jpg,png,svg,webp,gif,ico}',
	},

	clean: './' + projectFolder + '/'
}

// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');

// Подключаем модули
const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync').create();
const del = require('del');

function browserSync() {
	browsersync.init({
		server: { baseDir: 'source/' },
		port: 6969,
		notify: false,
		online: true
	})
};

exports.browserSync = browserSync;

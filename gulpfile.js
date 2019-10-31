const {src, dest, watch, parallel, series} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const del = require('delete');
const md = require('gulp-markdown');
const wrap = require('gulp-wrap');
const frontMatter = require('gulp-front-matter');
const sourcemaps = require('gulp-sourcemaps');

function markdown() {
    return src('source/pages/*.md')
      .pipe(frontMatter())
      .pipe(md())
      .pipe(wrap({ src: 'source/template/layout.html' }))
      .pipe(dest('prod/'));
}
exports.markdown = markdown; 

function image() {
    return src(['source/images/*.jpg', 'source/images/*.png']).pipe(dest('prod/images/'));
}

function css(){

    return src('source/ui/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('prod/ui/'));
}  
exports.css = css; 

function watch_task() {

    watch('source/ui/*.scss', series(css,reload));
    watch('source/pages/*.md', series(markdown,reload));
    watch(['source/images/*.jpg', 'source/images/*.png'], series(image, reload));
}
exports.watch = watch_task;


function sync(cb) {

    browserSync.init({
        server: {baseDir: 'prod/'}
    });
    cb();
}

exports.sync= sync;

function reload(cb) {
    browserSync.reload();
    cb();
}

function clean(cb) {

    del(['prod/'], cb);
}
exports.clean = clean;

exports.default = series(clean, parallel(markdown, image, css), sync, watch_task);
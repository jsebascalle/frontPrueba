var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

/* path to resources source & final */
var path = {
    src_js_files: './js/**/*.js',
    src_css_dir: './css',
    src_css_files: './css/**/*.css',
    src_js_dir: './js',
    src_scss_files: './scss/**/*.scss',
    //dist_dir: 'public_html',
    //dist_css_dir: 'public_html/css',
    //dist_js_dir: 'public_html/js',
    //cssGlob_files: 'public_html/css/**/*.css',
    //html_files: 'public_html/*.html'
};

gulp.task('sass', ()=>{
  gulp.src(path.src_scss_files)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.dist_css_dir));
  console.log('SASS sucess...');
});

gulp.task('cssmin', function () {
    gulp.src(path.src_css_files)
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest(path.dist_css_dir));
    console.log('CSS sucess...');
});


gulp.task('jsmin', function() {
    gulp.src(path.src_js_files)
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(path.src_js_dir))
});

gulp.task('default',() =>{
    gulp.watch('./scss/style.scss',gulp.series('sass','cssmin','jsmin'));
});

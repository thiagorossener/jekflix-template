let gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    stylus      = require('gulp-stylus'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
    jeet        = require('jeet'),
    rupture     = require('rupture'),
    koutoSwiss  = require('kouto-swiss'),
    prefixer    = require('autoprefixer-stylus'),
    imagemin    = require('gulp-imagemin'),
    cp          = require('child_process'),
    del         = require('del');

/**
 * Notify
 * 
 * Show a notification in the browser's corner.
 * 
 * @param {*} message 
 */
function notify(message) {
  browserSync.notify(message);
}

/**
 * Jekyll Task
 * 
 * Build the Jekyll Site.
 * 
 * @param {*} done 
 */
function jekyll(done) {
  notify('Buiding Jekyll...');
  return cp
    .spawn('bundle', ['exec', 'jekyll build'], { stdio: 'inherit' })
    .on('close', done);
}

/**
 * Server Task
 * 
 * Launch server using BrowserSync.
 * 
 * @param {*} done 
 */
function server(done) {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
  done();
}

/**
 * Reload Task
 * 
 * Reload page with BrowserSync.
 * 
 * @param {*} done 
 */
function reload(done) {
  browserSync.reload();
  done();
}

/**
 * CSS Task
 * 
 * The Stylus files are run through kouto-swiss/prefixer/jeet/rupture
 * and placed into one single main styles.min.css file (and sourcemap)
 */
function css() {
  notify('Compiling Stylus files...');
  return gulp.src('src/styl/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use:[koutoSwiss(), prefixer(), jeet(), rupture()],
      compress: true
    }))
    .pipe(rename('styles.min.css'))
    .pipe(plumber())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/css'));
}

/**
 * JavaScript Task
 * 
 * All regular .js files are collected, minified and concatonated into one
 * single scripts.min.js file (and sourcemap)
 */
function js() {
  notify('Rebuilding JS files...');
  return gulp.src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(plumber())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/js/'));
}

/**
 * Images Task
 * 
 * All images are optimized and copied to assets folder.
 */
function images() {
  notify('Copying image files...');
  return gulp.src('src/img/**/*.{jpg,png,gif,svg}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
}

 /**
  * Watch Task
  * 
  * - Watch stylus files for changes & recompile
  * - Watch JS files for changes & recompile
  * - Watch images for changes & recompile
  * - Watch html/md files, run jekyll & reload BrowserSync
  */
function watch() {
  gulp.watch('src/styl/**/*.styl', css);
  gulp.watch('src/js/**/*.js', gulp.series(js, jekyll, reload));
  gulp.watch('src/img/**/*', gulp.series(images, jekyll, reload));
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*', 'category/*'], gulp.series(jekyll, reload));
}

/**
 * Clean Task
 * 
 * Delete assets.
 */
function clean() {
  return del(['assets/', '_site/assets/']);
}

/**
 * Default Task
 * 
 * Running just `gulp` will:
 * - Clean assets
 * - Compile the Stylus and JavaScript
 * - Optimize and copy images to its folder
 * - Compile the Jekyll site
 * - Launch BrowserSync & watch files
 */

exports.default = gulp.series(clean, gulp.parallel(js, css, images), jekyll, gulp.parallel(server, watch));

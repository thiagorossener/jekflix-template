let gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    include     = require('gulp-include'),
    plumber     = require('gulp-plumber'),
    rename      = require('gulp-rename'),
    sourcemaps  = require('gulp-sourcemaps'),
    stylus      = require('gulp-stylus'),
    uglify      = require('gulp-uglify'),
    yaml        = require('gulp-yaml'),
    prefixer    = require('autoprefixer-stylus'),
    browserSync = require('browser-sync'),
    cp          = require('child_process'),
    del         = require('del'),
    jeet        = require('jeet'),
    koutoSwiss  = require('kouto-swiss'),
    rupture     = require('rupture');

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
 * Config Task
 * 
 * Build the main YAML config file.
 */
function config() {
  return gulp.src('src/yml/_config.yml')
    .pipe(include())
    .on('error', console.error)
    .pipe(gulp.dest('./'));
}

/**
 * Jekyll Task
 * 
 * Build the Jekyll Site.
 * 
 * @param {*} done 
 */
function jekyll(done) {
  notify('Building Jekyll...');
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
  notify('Reloading...');
  browserSync.reload();
  done();
}

/**
 * Theme Task
 * 
 * Create the JSON theme file.
 */
function theme() {
  return gulp.src('src/yml/theme.yml')
    .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
    .pipe(gulp.dest('src/styl/'));
}

/**
 * Main CSS Task
 * 
 * The regular Stylus files are run through kouto-swiss/prefixer/jeet/rupture
 * and placed into one single main styles.min.css file (and sourcemap)
 */
function mainCss() {
  notify('Compiling styles...');
  return gulp.src('src/styl/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [koutoSwiss(), prefixer(), jeet(), rupture()],
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
 * Preview CSS Task
 * 
 * The preview Stylus file is run through kouto-swiss/prefixer/jeet/rupture
 * and placed into one single preview.min.css file (and sourcemap)
 */
function previewCss() {
  notify('Compiling styles...');
  return gulp.src('src/styl/preview.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [koutoSwiss(), prefixer(), jeet(), rupture()],
      compress: true
    }))
    .pipe(rename('preview.min.css'))
    .pipe(plumber())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/css'));
}

/**
 * CSS Task
 * 
 * Run all the CSS related tasks.
 */
const css = gulp.parallel(mainCss, previewCss);

/**
 * Main JS Task
 * 
 * All regular .js files are collected, minified and concatonated into one
 * single scripts.min.js file (and sourcemap)
 */
function mainJs() {
  notify('Building JS files...');
  return gulp.src('src/js/main/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(plumber())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('_site/assets/js/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/js'));
}

/**
 * Preview JS Task
 * 
 * Copy preview JS files to the assets folder.
 */
function previewJs() {
  notify('Copying preview files...');
  return gulp.src('src/js/preview/**/*.*')
    .pipe(gulp.dest('assets/js/'));
}

/**
 * JavaScript Task
 * 
 * Run all the JS related tasks.
 */
const js = gulp.parallel(mainJs, previewJs);

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
 * Watch files to run proper tasks.
 */
function watch() {
  // Watch YAML files for changes & recompile
  gulp.watch(['src/yml/*.yml', '!src/yml/theme.yml'], gulp.series(config, jekyll, reload));

  // Watch theme file for changes, rebuild styles & recompile
  gulp.watch(['src/yml/theme.yml'], gulp.series(theme, css, config, jekyll, reload));

  // Watch stylus files for changes & rebuild styles
  gulp.watch(['src/styl/**/*.styl', '!src/styl/preview.styl'], gulp.series(theme, mainCss));

  // Watch preview style file for changes, rebuild styles & reload
  gulp.watch('src/styl/preview.styl', gulp.series(theme, previewCss, reload));

  // Watch JS files for changes & recompile
  gulp.watch('src/js/main/**/*.js', mainJs);

  // Watch preview JS files for changes, copy files & reload
  gulp.watch('src/js/preview/**/*.js', gulp.series(previewJs, reload));

  // Watch images for changes, optimize & recompile
  gulp.watch('src/img/**/*', gulp.series(images, config, jekyll, reload));

  // Watch html/md files, rebuild config, run Jekyll & reload BrowserSync
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*', '_authors/*', 'pages/*', 'category/*'], gulp.series(config, jekyll, reload));
}

/**
 * Default Task
 *
 * Running just `gulp` will:
 * - Compile the theme, Stylus and JavaScript files
 * - Optimize and copy images to its folder
 * - Build the config file
 * - Compile the Jekyll site
 * - Launch BrowserSync & watch files
 */
exports.default = gulp.series(gulp.parallel(js, gulp.series(theme, css), images), config, jekyll, gulp.parallel(server, watch));

/**
 * Build Task
 * 
 * Running just `gulp build` will:
 * - Compile the theme, Stylus and JavaScript files
 * - Optimize and copy images to its folder
 * - Build the config file
 * - Compile the Jekyll site
 */
exports.build = gulp.series(gulp.parallel(js, gulp.series(theme, css), images), config, jekyll);

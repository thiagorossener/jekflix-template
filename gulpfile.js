var env       = require('minimist')(process.argv.slice(2)),
  gulp        = require('gulp'),
  plumber     = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  stylus      = require('gulp-stylus'),
  uglify      = require('gulp-uglify'),
  concat      = require('gulp-concat'),
  jeet        = require('jeet'),
  rupture     = require('rupture'),
  koutoSwiss  = require('kouto-swiss'),
  prefixer    = require('autoprefixer-stylus'),
  imagemin    = require('gulp-imagemin'),
  cp          = require('child_process');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */

function jekyllbuild (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle', ['exec', 'jekyll build'], {stdio: 'inherit'})
    .on('close', done);
    done ();
}

/**
 * Rebuild Jekyll & do page reload
 */

function jekyllrebuild(done) {
  browserSync.reload();
  done();
}

/**
 * Wait for jekyll-build, then launch the Server
 */

function browser_sync() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
}

/**
 * Stylus task
 */

function stylus(){
    gulp.src('src/styl/main.styl')
    .pipe(plumber())
    .pipe(stylus({
      use:[koutoSwiss(), prefixer(), jeet(), rupture()],
      compress: true
    }))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'));
}

/**
 * Javascript Task
 */

function js(){
  return gulp.src((env.p) ? 'src/js/**/*.js' : ['src/js/**/*.js', '!src/js/analytics.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'));
}

/**
 * Imagemin Task
 */

function imagemin () {
  return gulp.src('src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
}

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */

function watch() {
  gulp.watch('src/styl/**/*.styl', ['stylus']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch(['**/*.html','index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
}

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */

 const init = gulp.series(jekyllbuild);
 const restart = gulp.series(jekyllrebuild,init);
 const waiting = gulp.series(init,browser_sync);
 const styles = gulp.series(stylus);
 const jsc = gulp.series(js);
 const image = gulp.series(imagemin);
 const watcher = gulp.series(watch);
 const build = gulp.series (init,restart,waiting,styles,jsc,image,watcher);

 exports.default = build;
 exports.build = build;

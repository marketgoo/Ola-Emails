import gulp from 'gulp';
import babel from 'gulp-babel';
import fs from 'fs';
import path from 'path';
import mjml2html from 'mjml';

import './components/index.js';

gulp.task('build', () => 
  gulp.src('components/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'))
)

gulp.task('demo', done => {
  fs.readFile(path.normalize('./demo/index.mjml'), 'utf8', (err, data) => {
    if (err) throw err
    const result = mjml2html(data, { validationLevel: 'soft' });

    result.errors.length && console.log(result.errors);
    fs.writeFileSync(path.normalize('./demo/index.html'), result.html);
    done();
  })
})

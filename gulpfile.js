const gulp = require('gulp');
const mjml2html = require('mjml');
const { Transform } = require('stream');

require('./src');

gulp.task('demo', () =>
  gulp.src('demo/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('demo'))
)

function mjml() {
  return new Transform({
      objectMode: true,
      transform(file, encoding, done) {
        const result = mjml2html(file.contents.toString(), { validationLevel: 'soft' });
        result.errors.length && console.log(result.errors);
        file.contents = Buffer.from(result.html);
        file.path = file.path.replace('.mjml', '.html');

        done(null, file);
      }
  });
}
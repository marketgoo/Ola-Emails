import gulp from 'gulp';
import babel from 'gulp-babel';
import fs from 'fs';
import path from 'path';
import mjml2html from 'mjml';
import { registerComponent } from 'mjml-core';

gulp.task('compile', () => 
  gulp.src('components/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'))
)

const components = getComponents();

gulp.task('build', done => {
  components.forEach(compPath => {
    const fullPath = path.join(process.cwd(), compPath.replace(/^components/, 'lib'));
    delete require.cache[fullPath]
    registerComponent(require(fullPath))
  })

  fs.readFile(path.normalize('./index.mjml'), 'utf8', (err, data) => {
    if (err) throw err
    const result = mjml2html(data);
    fs.writeFileSync(path.normalize('./index.html'), result.html);
    done();
  })
})

gulp.task('watch', gulp.series('compile', 'build', () => 
  gulp.watch(
    [
      'components/**/*.js',
      'index.mjml'
    ], 
    gulp.series('compile', 'build')
  )
))

function getComponents (dir = './components') {
  const filelist = [];

  fs.readdirSync(dir).forEach(file => {
    file = path.join(dir, file);

    if (!fs.statSync(file).isDirectory()) {
      filelist.push(file);
    }
  })

  return filelist
}

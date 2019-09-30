const { watch, task, series } = require('gulp');

module.exports = task('watch', function(){
  watch('sass/*.scss', series('sass', 'clean-css')),
  watch('js/main.js', series('uglify'))
});
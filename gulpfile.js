const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles () {
    return gulp.src('./src/styles/*.scss') // é onde vamos pegar os arquivos fonte, aqui apenas recupera. 
    .pipe(sass({outputStyle: 'compressed'})) // para comprimir
    .pipe(gulp.dest('./dist/css')); // para que o css seja enviado já comprimido
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
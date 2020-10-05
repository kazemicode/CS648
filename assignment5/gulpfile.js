var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compuler = require('node-sass');

function css() {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
};

exports.default = function () {
    watch('src/*.scss', css);
};

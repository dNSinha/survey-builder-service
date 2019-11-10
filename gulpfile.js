var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT:8000
        },
        ignore: ['./node-modules/**']//not restarts in case of change in node-modules
    })
    .on('restart', function(){
        console.log('Restarting');
    });
})
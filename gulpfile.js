var gulp = require('gulp');
var karma = require('karma');
var sequence = require('gulp-sequence');

var pathUtil = require('./tasks/utils/path.util');

var Server = karma.Server;


gulp.task('sample:testing', function(done){
    new Server({
        configFile: pathUtil.resolve('tasks/config') + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('test', sequence(['sample:testing']));
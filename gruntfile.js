module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['src/**/*.*'],
            tasks: ['browserify']
        },
        browserify: {
            dev: {
                files: {
                    'build/main.js': ['src/main.js']
                },
                options: {
                    browserifyOptions: {
                        debug: true,
                        transform: ['html2js-browserify']
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

};
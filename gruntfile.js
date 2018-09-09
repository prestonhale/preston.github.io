module.exports = function(grunt) {

    //Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            }
        },

        build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
        },

        less: {
            development: {
                files: [
                    {src: "./index.less", dest: "static/css/index.css"}
                ]
            }
        },
        
        browserify: {
            development: {
                files: [
                    {src: "src/**/*.js", dest: "static/js/main.js"}
                ]
            }
        },

        watch: {
            less: {
                files: ["**/*.less"],
                tasks: ["less"]
            },
            browserifywatcher: {
                files: ['src/**/*.js'],
                tasks: ['browserify']
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', ['browserify', 'less']);
    grunt.registerTask('test', 'Test task.', function() {
        grunt.log.writeln('Test task ran successfully.');
    });
}
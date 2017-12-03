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
                files: {
                    "src/static/css/App.css": "src/**/*.less"
                }
            }
        },

        watch: {
            less: {
                files: ["src/**/*.less"],
                tasks: ["less"]
            },
            browserifywatcher: {
                files: ['tp_dash/react/*.js'],
                tasks: ['browserify']
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
}
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
                    "src/static/css/index.css": "src/index.less"
                }
            }
        },
        
        browserify: {
            development: {
                files: {
                    "src/static/js/index.js": "src/index.js"
                }
            }
        },

        watch: {
            less: {
                files: ["src/**/*.less"],
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
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
}
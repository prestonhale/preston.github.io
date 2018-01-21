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
                    "static/css/index.css": "./index.less"
                }
            }
        },
        
        browserify: {
            development: {
                files: {
                    "static/js/index.js": "index.js"
                }
            }
        },

        watch: {
            less: {
                files: ["*.less"],
                tasks: ["less"]
            },
            browserifywatcher: {
                files: ['*.js'],
                tasks: ['browserify']
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
}
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
            handlebars: {
                files: ["**/*.handlebars"],
                tasks: ["handlebars"]
            },
            less: {
                files: ["**/*.less"],
                tasks: ["less"]
            },
            browserifywatcher: {
                files: ['src/**/*.js'],
                tasks: ['browserify']
            }
        },

        handlebars: {
            all: {
                files: {
                    'static/templates/templatesCompiled.js': 'src/templates/*.handlebars'
                }
            }
        },

        imagemin: {
            static: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                },
                files: {
                    'dist/img.png': 'src/img.png',
                    'dist/img.jpg': 'src/img.jpg',
                    'dist/img.gif': 'src/img.gif'
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'static/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/static/images/'
                }],
                options: {
                    optimizationLevel: 1,
                    svgoPlugins: [{removeViewBox: false}],
                },
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-handlebars-compiler');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', ['browserify', 'less', 'handlebars']);
    grunt.registerTask('dmin', ['imagemin:dynamic']);
    grunt.registerTask('test', 'Test task.', function() {
        grunt.log.writeln('Test task ran successfully.');
    });
}
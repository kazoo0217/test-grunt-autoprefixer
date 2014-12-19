module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9']
      },
      //// prefix the specified file
      //single_file: {
      //  options: {
      //    // Target-specific options go here.
      //  },
      //  src: 'dev/test.css',
      //  dest: 'dist/test.css'
      //},
      // prefix all files
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'dev/*.css',
        dest: 'dist/'
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['autoprefixer']);

};

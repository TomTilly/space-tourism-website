const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/styles/');
  eleventyConfig.addWatchTarget('./src/styles/');

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
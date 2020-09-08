const readerBar = require('eleventy-plugin-reader-bar');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('./src/css');

  eleventyConfig.addPlugin(readerBar)

  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md", "liquid", "hbs"],
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
    }
  }
}
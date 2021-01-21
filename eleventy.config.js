require('dotenv').config();

module.exports = (config) => {
  config.setDataDeepMerge(true);

  config.addPassthroughCopy("src/assets/js/**/*");
  config.addPassthroughCopy("src/assets/css/**/*");
  config.addPassthroughCopy("src/assets/img/**/*");

  config.addLayoutAlias("default", "layouts/default.njk");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["md", "njk", "html"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

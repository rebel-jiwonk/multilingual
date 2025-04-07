module.exports = function (eleventyConfig) {
  // ✅ Passthrough static files
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("faq.en.json");
  eleventyConfig.addPassthroughCopy("faq.ko.json");
  eleventyConfig.addPassthroughCopy("search.html");

  // ✅ Watch your CSS (optional, for live reload)
  eleventyConfig.setBrowserSyncConfig({
    files: ['./assets/**/*.css']
  });

  // ✅ Define a collection for FAQs
  eleventyConfig.addCollection("faq", (collectionApi) =>
    collectionApi.getFilteredByGlob("faq/**/*.md")
  );

  return {
    dir: {
      input: ".",            // source dir
      includes: "_includes", // where your layouts are
      output: "_site"        // output dir
    },
  };
};
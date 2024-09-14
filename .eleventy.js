module.exports = function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src/css/");

    eleventyConfig.addPassthroughCopy("src/prispevek/"); 

    eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.addWatchTarget("src/");

    eleventyConfig.addCollection ('posts', function(collectionApi){
        return collectionApi.getFilteredByGlob('src/prispevek/**/*.md');
        }
    )

    eleventyConfig.addCollection("allTags", function(collectionApi) {
        let tagSet = new Set();
        collectionApi.getAll().forEach(item => {
          if ("tags" in item.data) {
            let tags = item.data.tags;
            tags = tags.filter(tag => tag !== "all"); // Optionally exclude certain tags like 'all'
            for (const tag of tags) {
              tagSet.add(tag);
            }
          }
        });
        return [...tagSet];
      });
    



    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}
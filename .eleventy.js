
const { DateTime } = require("luxon");

// add to .eleventy.js
module.exports = function(eleventyConfig) {

  /* Markdown Overrides */
  // set markdown footnote processor
  let markdownIt = require("markdown-it");
  let markdownItFootnote = require("markdown-it-footnote");

  let options = {
    html: true, // Enable HTML tags in source
    breaks: true,  // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
  };
  
  // configure the library with options
  let markdownLib =  markdownIt(options).use(markdownItFootnote);
  // set the library to process markdown files
  
  markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();
  
    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId;
    }
  
    return n;
  };

  eleventyConfig.setLibrary("md", markdownLib);

  //rest of your config here...
    eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/css/tailwind.css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/admin/index.html");
    eleventyConfig.addPassthroughCopy("src/admin/config.yml");


    eleventyConfig.addShortcode(
        "headers",
        (title, subtitle) =>
          `<h1>${title}</h1>
            <p>${subtitle}</p>`
      );
      eleventyConfig.addShortcode("currentDate", (date = DateTime.now()) => {
        return date;
      });  
      
      eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });
      
      eleventyConfig.addCollection("page", function(collections) {
        return collections.getFilteredByTag("page").sort(function(a, b) {
          return a.data.order - b.data.order;
        });
      });



    return {
      dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
      },
    };
  };


  
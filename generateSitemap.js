const SitemapGenerator = require("sitemap-generator");

const generator = SitemapGenerator("", {
  //Insert your registered domain name here
  stripQuerystring: false, // Set to true if you want to remove query strings from URLs
});

generator.on("done", () => {
  console.log("Sitemap generated successfully.");
});

generator.start();

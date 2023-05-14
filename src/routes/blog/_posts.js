const fs = require("fs");
const fm = require("front-matter");
const marked = require("marked");
const hljs = require("highlight.js");

const files = fs.readdirSync("posts").reverse();

// Use highlight.js as the highlighter for the marked library
marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlight(lang, code).value;
  },
});

const posts = [];
for (let i = 0; i < files.length; i++) {
  const content = fs.readFileSync(`posts/${files[i]}`, { encoding: "utf-8" });
  // Use the front-matter library to separate the body from the front matter
  const { body, ...frontMatter } = fm(content);
  // Use the marked library to turn markdown into html
  const html = marked(body);
  posts.push({ html, ...frontMatter.attributes });
}

export default posts;
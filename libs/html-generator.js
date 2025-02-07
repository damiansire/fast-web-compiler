class HtmlHandler {
  marks = ["#{last_head_styles_line}", "#{last_head_line}", "#{last_body_line}"];

  constructor(initialHtml = null) {
    this.html = initialHtml || this.createInitialHtml();
  }

  createInitialHtml() {
    return `<html>
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
      #{last_head_styles_line}
    </style>
    #{last_head_line}
</head>
<body class="c16 doc-content">
    #{last_body_line}
</body>
</html>`;
  }

  insertHeadStyles(styles) {
    this.html = this.html.replace("#{last_head_styles_line}", `${styles}\n#{last_head_styles_line}`);
    return this;
  }

  insertHeadContent(content) {
    this.html = this.html.replace("#{last_head_line}", `${content}\n#{last_head_line}`);
    return this;
  }

  insertBodyContent(content) {
    this.html = this.html.replace("#{last_body_line}", `${content}\n#{last_body_line}`);
    return this;
  }

  getHtml() {
    return this.html;
  }

  saveHtml(filePath) {
    const fs = require("fs");
    const cleanHtml = this.html.replace(/#{last_head_styles_line}|#{last_head_line}|#{last_body_line}/g, "").trim();
    fs.writeFileSync(filePath, cleanHtml);
    return this;
  }
}

module.exports = HtmlHandler;

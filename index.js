const HtmlHandler = require("./libs/html-generator");
const handler = new HtmlHandler();

//handler.insertHeadStyles(styles);
//handler.insertHeadContent(headContent);
//handler.insertBodyContent(bodyContent);
handler.saveHtml("output/output_replace.html");

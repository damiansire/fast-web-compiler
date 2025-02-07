const HtmlHandler = require("./libs/html-generator");
const { readCss } = require("./libs/file-handler");
const handler = new HtmlHandler();

generalStyles = readCss("./components/resume/styles.css");
handler.insertHeadStyles(generalStyles);
//handler.insertHeadContent(headContent);
//handler.insertBodyContent(bodyContent);
handler.saveHtml("output/output_replace.html");

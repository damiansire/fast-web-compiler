const fs = require("fs");

const readCss = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    return data;
  } catch (err) {
    console.error("Error when read the file:", err);
    throw err;
  }
};

module.exports = {
  readCss,
};

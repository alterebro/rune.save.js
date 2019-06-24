const saveAs = require("./saveAs.js");
const xSVG = function(query) {

    this.el = document.querySelector(query);
    this.width = this.el.getBBox().width;
    this.height = this.el.getBBox().height;
    this.saveAs = saveAs;
    return this;

}

module.exports = xSVG;

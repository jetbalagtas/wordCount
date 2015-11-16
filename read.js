var wordPM = 0;

readTime = {

  configWPM : function(setup) {
      wordPM = setup;
  },
  // http://stackoverflow.com/questions/19218031/changing-global-variable-value-inside-function

  getWPM : function() {
      return wordPM;
  },

  convertToArray : function(html) {
    return html;
  },

  getTextFromNodes : function(currVal, idx, arr) {
    return currVal.splice(arr);
  }

};

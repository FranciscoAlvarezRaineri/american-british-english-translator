const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

// Reverse the key and value for an object and return the resulting object
const reverseDictionary = (dictObj) => {
  const reverseDict = {};
  Object.keys(dictObj).forEach((key) => {
    reverseDict[dictObj[key]] = key;
  });
  return reverseDict;
};

// Create an array of dictionary objects with keys containing multiple words first
const createDictionary = (dictObj) => {
  const multiWord = [];
  const singleWord = [];
  Object.keys(dictObj).forEach((key) => {
    const wordObj = {};
    wordObj[key] = dictObj[key];
    if (key.split(/\s/).length > 1) {
      multiWord.push(wordObj);
    } else {
      singleWord.push(wordObj);
    }
  });
  return [].concat(multiWord, singleWord);
};

const americanToBritishWords = createDictionary(americanOnly);
const britishToAmericanWords = createDictionary(britishOnly);
const britishToAmericanSpelling = reverseDictionary(americanToBritishSpelling);
const britishToAmericanTitles = reverseDictionary(americanToBritishTitles);

// Escape the period character in the titles
Object.keys(americanToBritishTitles).forEach((key) => {
  const newKey = key.replace(/\./, "\\.");
  const value = americanToBritishTitles[key];
  delete americanToBritishTitles[key];
  americanToBritishTitles[newKey] = value;
});

class Translator {
  constructor(text = null, locale = null, highlight = true) {
    this.text = text;
    this.locale = locale;
    this.highlight = highlight;
    this.translation = null;
  }

  setText(text) {
    if (!!text) {
      this.text = text;
    }
  }

  setLocale(locale) {
    if (!!locale) {
      this.locale = locale;
    }
  }

  setHighlight(highlight) {
    this.highlight = !!highlight;
  }

  translate() {
    // Preserve the case of the initial character of a word when translating
    const preserveInitialCase = (oldStr, newStr) => {
      return oldStr[0] === oldStr[0].toUpperCase()
        ? newStr.replace(newStr[0], newStr[0].toUpperCase())
        : newStr;
    };

    let translatedText = this.text;

    // Set defaults that will not change the text
    let myDict = [];
    let mySpelling = {};
    let myTitles = {};
    let myTimeRegEx = new RegExp("");
    let newTimeDelimeter = "";
    let highlightSpanTag = '<span class="highlight">';
    let highlightCloseSpanTag = "</span>";

    if (!this.highlight) {
      highlightSpanTag = "";
      highlightCloseSpanTag = "";
    }

    if (this.locale === "american-to-british") {
      myDict = americanToBritishWords;
      mySpelling = americanToBritishSpelling;
      myTitles = americanToBritishTitles;
      myTimeRegEx = /(\d+):(\d+)/;
      newTimeDelimeter = ".";
    } else if (this.locale === "british-to-american") {
      myDict = britishToAmericanWords;
      mySpelling = britishToAmericanSpelling;
      myTitles = britishToAmericanTitles;
      myTimeRegEx = /(\d+)\.(\d+)/;
      newTimeDelimeter = ":";
    }

    // Translate words
    myDict.forEach((obj) => {
      const key = Object.keys(obj).join("");
      const re = new RegExp(`(\\W+|^)(${key})(\\W+|$)`, "ig");
      const match = re.exec(translatedText);
      if (match) {
        const replacement = preserveInitialCase(match[2], obj[key]);
        translatedText = translatedText.replace(
          re,
          `$1${highlightSpanTag}${replacement}${highlightCloseSpanTag}$3`
        );
      }
    });

    // Change spelling and titles
    [mySpelling, myTitles].forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        const re = new RegExp(`(\\W+|^)(${key})(\\W+|$)`, "ig");
        const match = re.exec(translatedText);
        if (match) {
          const replacement = preserveInitialCase(match[2], obj[key]);
          translatedText = translatedText.replace(
            re,
            `$1${highlightSpanTag}${replacement}${highlightCloseSpanTag}$3`
          );
        }
      });
    });

    // Change clock format
    translatedText = translatedText.replace(
      myTimeRegEx,
      `${highlightSpanTag}$1${newTimeDelimeter}$2${highlightCloseSpanTag}`
    );

    this.translation =
      this.text === translatedText
        ? "Everything looks good to me!"
        : translatedText;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Translator;

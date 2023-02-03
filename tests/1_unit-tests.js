const chai = require("chai");
const { before, suite, after } = require("mocha");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translatorAtB = new Translator();
  translatorAtB.setHighlight(false);
  translatorAtB.setLocale("american-to-british");
  suite("Translations", () => {
    suite("to British English", () => {
      // Translate Mangoes are my favorite fruit. to British English
      test("Translate Mangoes are my favorite fruit.", () => {
        translatorAtB.setText("Mangoes are my favorite fruit.");
        translatorAtB.translate();
        assert.equal(
          translatorAtB.translation,
          "Mangoes are my favourite fruit."
        );
      });
      // Translate I ate yogurt for breakfast. to British English yoghurt
      test("Translate I ate yogurt for breakfast.", () => {
        translatorAtB.setText("I ate yogurt for breakfast.");
        translatorAtB.translate();
        assert.equal(translatorAtB.translation, "I ate yoghurt for breakfast.");
      });
      // Translate We had a party at my friend's condo. to British English
      test("Translate We had a party at my friend's condo.", () => {
        translatorAtB.setText("We had a party at my friend's condo.");
        translatorAtB.translate();
        assert.equal(
          translatorAtB.translation,
          "We had a party at my friend's flat."
        );
      });
      // Translate Can you toss this in the trashcan for me? to British English
      test("Translate Can you toss this in the trashcan for me?", () => {
        translatorAtB.setText("Can you toss this in the trashcan for me?");
        translatorAtB.translate();
        assert.equal(
          translatorAtB.translation,
          "Can you toss this in the bin for me?"
        );
      });
      // Translate The parking lot was full. to British English
      test("Translate The parking lot was full.", () => {
        translatorAtB.setText("The parking lot was full.");
        translatorAtB.translate();
        assert.equal(translatorAtB.translation, "The car park was full.");
      });
      // Translate Like a high tech Rube Goldberg machine. to British English
      test("Translate Like a high tech Rube Goldberg machine.", () => {
        translatorAtB.setText("Like a high tech Rube Goldberg machine.");
        translatorAtB.translate();
        assert.equal(
          translatorAtB.translation,
          "Like a high tech Heath Robinson device."
        );
      });
      // Translate To play hooky means to skip class or work. to British English
      test("Translate To play hooky means to skip class or work.", () => {
        translatorAtB.setText("To play hooky means to skip class or work.");
        translatorAtB.translate();
        assert.equal(
          translatorAtB.translation,
          "To bunk off means to skip class or work."
        );
      });
      // Translate No Mr. Bond, I expect you to die. to British English
      test("Translate No Mr. Bond, I expect you to die.", () => {
        translatorAtB.setText("No Mr. Bond, I expect you to die.");
        translatorAtB.translate();
        assert.equal(
          translatorAtB.translation,
          "No Mr Bond, I expect you to die."
        );
      });
      // Translate Dr. Grosh will see you now. to British English
      test("Translate Dr. Grosh will see you now.", () => {
        translatorAtB.setText("Dr. Grosh will see you now.");
        translatorAtB.translate();
        assert.equal(translatorAtB.translation, "Dr Grosh will see you now.");
      });
      // Translate Lunch is at 12:15 today. to British English
      test("Translate Lunch is at 12:15 today.", () => {
        translatorAtB.setText("Lunch is at 12:15 today.");
        translatorAtB.translate();
        assert.equal(translatorAtB.translation, "Lunch is at 12.15 today.");
      });
    });
    suite("to American English", () => {
      const translatorBtA = new Translator();
      translatorBtA.setHighlight(false);
      translatorBtA.setLocale("british-to-american");
      // Translate We watched the footie match for a while. to American English
      test("Translate We watched the footie match for a while.", () => {
        translatorBtA.setText("We watched the footie match for a while.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "We watched the soccer match for a while."
        );
      });
      // Translate Paracetamol takes up to an hour to work. to American English
      test("Translate Paracetamol takes up to an hour to work.", () => {
        translatorBtA.setText("Paracetamol takes up to an hour to work.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "Tylenol takes up to an hour to work."
        );
      });
      // Translate First, caramelise the onions. to American English
      test("Translate First, caramelise the onions.", () => {
        translatorBtA.setText("First, caramelise the onions.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "First, caramelize the onions."
        );
      });
      // Translate I spent the bank holiday at the funfair. to American English
      test("Translate I spent the bank holiday at the funfair.", () => {
        translatorBtA.setText("I spent the bank holiday at the funfair.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "I spent the public holiday at the carnival."
        );
      });
      // Translate I had a bicky then went to the chippy. to American English
      test("Translate I had a bicky then went to the chippy.", () => {
        translatorBtA.setText("I had a bicky then went to the chippy.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "I had a cookie then went to the fish-and-chip shop."
        );
      });
      // Translate I've just got bits and bobs in my bum bag. to American English
      test("Translate I've just got bits and bobs in my bum bag.", () => {
        translatorBtA.setText("I've just got bits and bobs in my bum bag.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "I've just got odds and ends in my fanny pack."
        );
      });
      // Translate The car boot sale at Boxted Airfield was called off. to American English
      test("Translate The car boot sale at Boxted Airfield was called off.", () => {
        translatorBtA.setText(
          "The car boot sale at Boxted Airfield was called off."
        );
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "The swap meet at Boxted Airfield was called off."
        );
      });
      // Translate Have you met Mrs Kalyani? to American English
      test("Translate Have you met Mrs Kalyani?", () => {
        translatorBtA.setText("Have you met Mrs Kalyani?");
        translatorBtA.translate();
        assert.equal(translatorBtA.translation, "Have you met Mrs. Kalyani?");
      });
      // Translate Prof Joyner of King's College, London. to American English
      test("Translate Prof Joyner of King's College, London.", () => {
        translatorBtA.setText("Prof Joyner of King's College, London.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "Prof. Joyner of King's College, London."
        );
      });
      // Translate Tea time is usually around 4 or 4.30. to American English
      test("Translate Tea time is usually around 4 or 4.30.", () => {
        translatorBtA.setText("Tea time is usually around 4 or 4.30.");
        translatorBtA.translate();
        assert.equal(
          translatorBtA.translation,
          "Tea time is usually around 4 or 4:30."
        );
      });
    });
  });
  suite("Highlights", () => {
    const translator = new Translator();
    beforeEach(() => {
      translator.setHighlight(true);
    });
    // Highlight translation in Mangoes are my favorite fruit.
    test("Translate Mangoes are my favorite fruit.", () => {
      translator.setLocale("american-to-british");
      translator.setText("Mangoes are my favorite fruit.");
      translator.translate();
      assert.equal(
        translator.translation,
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
    });
    // Highlight translation in I ate yogurt for breakfast.
    test("Translate I ate yogurt for breakfast.", () => {
      translator.setLocale("american-to-british");
      translator.setText("I ate yogurt for breakfast.");
      translator.translate();
      assert.equal(
        translator.translation,
        'I ate <span class="highlight">yoghurt</span> for breakfast.'
      );
    });
    // Highlight translation in We watched the footie match for a while.
    test("Translate We watched the footie match for a while.", () => {
      translator.setLocale("british-to-american");
      translator.setText("We watched the footie match for a while.");
      translator.translate();
      assert.equal(
        translator.translation,
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
    });
    // Highlight translation in Paracetamol takes up to an hour to work.
    test("Translate Paracetamol takes up to an hour to work.", () => {
      translator.setLocale("british-to-american");
      translator.setText("Paracetamol takes up to an hour to work.");
      translator.translate();
      assert.equal(
        translator.translation,
        '<span class="highlight">Tylenol</span> takes up to an hour to work.'
      );
    });
  });
});

const chai = require("chai");
const { before, suite } = require("mocha");
const assert = chai.assert;

const Translator = require("../components/translator.js");

suite("Unit Tests", () => {
  const translator = new Translator();
  suite("Translations", () => {
    before(() => {
      translator.setHighlight(false);
    });
    suite("to British English", () => {
      before(() => {
        translator.setLocale("american-to-british");
      });
      // Translate Mangoes are my favorite fruit. to British English
      test("Translate Mangoes are my favorite fruit.", () => {
        translator.setText("Mangoes are my favorite fruit.");
        translator.translate();
        assert.equal(translator.translation, "Mangoes are my favourite fruit.");
      });
      // Translate I ate yogurt for breakfast. to British English yoghurt
      test("Translate I ate yogurt for breakfast.", () => {
        translator.setText("I ate yogurt for breakfast.");
        translator.translate();
        assert.equal(translator.translation, "I ate yoghurt for breakfast.");
      });
      // Translate We had a party at my friend's condo. to British English
      test("Translate We had a party at my friend's condo.", () => {
        translator.setText("We had a party at my friend's condo.");
        translator.translate();
        assert.equal(
          translator.translation,
          "We had a party at my friend's flat."
        );
      });
      // Translate Can you toss this in the trashcan for me? to British English
      test("Translate Can you toss this in the trashcan for me?", () => {
        translator.setText("Can you toss this in the trashcan for me?");
        translator.translate();
        assert.equal(
          translator.translation,
          "Can you toss this in the bin for me?"
        );
      });
      // Translate The parking lot was full. to British English
      test("Translate The parking lot was full.", () => {
        translator.setText("The parking lot was full.");
        translator.translate();
        assert.equal(translator.translation, "The car park was full.");
      });
      // Translate Like a high tech Rube Goldberg machine. to British English
      test("Translate Like a high tech Rube Goldberg machine.", () => {
        translator.setText("Like a high tech Rube Goldberg machine.");
        translator.translate();
        assert.equal(
          translator.translation,
          "Like a high tech Heath Robinson device."
        );
      });
      // Translate To play hooky means to skip class or work. to British English
      test("Translate To play hooky means to skip class or work.", () => {
        translator.setText("To play hooky means to skip class or work.");
        translator.translate();
        assert.equal(
          translator.translation,
          "To bunk off means to skip class or work."
        );
      });
      // Translate No Mr. Bond, I expect you to die. to British English
      test("Translate No Mr. Bond, I expect you to die.", () => {
        translator.setText("No Mr. Bond, I expect you to die.");
        translator.translate();
        assert.equal(
          translator.translation,
          "No Mr Bond, I expect you to die."
        );
      });
      // Translate Dr. Grosh will see you now. to British English
      test("Translate Dr. Grosh will see you now.", () => {
        translator.setText("Dr. Grosh will see you now.");
        translator.translate();
        assert.equal(translator.translation, "Dr Grosh will see you now.");
      });
      // Translate Lunch is at 12:15 today. to British English
      test("Translate Lunch is at 12:15 today.", () => {
        translator.setText("Lunch is at 12:15 today.");
        translator.translate();
        assert.equal(translator.translation, "Lunch is at 12.15 today.");
      });
    });
    suite("to American English", () => {
      before(() => {
        translator.setLocale("british-to-american");
      });
      // Translate We watched the footie match for a while. to American English
      test("Translate We watched the footie match for a while.", () => {
        translator.setText("We watched the footie match for a while.");
        translator.translate();
        assert.equal(
          translator.translation,
          "We watched the soccer match for a while."
        );
      });
      // Translate Paracetamol takes up to an hour to work. to American English
      test("Translate Paracetamol takes up to an hour to work.", () => {
        translator.setText("Paracetamol takes up to an hour to work.");
        translator.translate();
        assert.equal(
          translator.translation,
          "Tylenol takes up to an hour to work."
        );
      });
      // Translate First, caramelise the onions. to American English
      test("Translate First, caramelise the onions.", () => {
        translator.setText("First, caramelise the onions.");
        translator.translate();
        assert.equal(translator.translation, "First, caramelize the onions.");
      });
      // Translate I spent the bank holiday at the funfair. to American English
      test("Translate I spent the bank holiday at the funfair.", () => {
        translator.setText("I spent the bank holiday at the funfair.");
        translator.translate();
        assert.equal(
          translator.translation,
          "I spent the public holiday at the carnival."
        );
      });
      // Translate I had a bicky then went to the chippy. to American English
      test("Translate I had a bicky then went to the chippy.", () => {
        translator.setText("I had a bicky then went to the chippy.");
        translator.translate();
        assert.equal(
          translator.translation,
          "I had a cookie then went to the fish-and-chip shop."
        );
      });
      // Translate I've just got bits and bobs in my bum bag. to American English
      test("Translate I've just got bits and bobs in my bum bag.", () => {
        translator.setText("I've just got bits and bobs in my bum bag.");
        translator.translate();
        assert.equal(
          translator.translation,
          "I've just got odds and ends in my fanny pack."
        );
      });
      // Translate The car boot sale at Boxted Airfield was called off. to American English
      test("Translate The car boot sale at Boxted Airfield was called off.", () => {
        translator.setText(
          "The car boot sale at Boxted Airfield was called off."
        );
        translator.translate();
        assert.equal(
          translator.translation,
          "The swap meet at Boxted Airfield was called off."
        );
      });
      // Translate Have you met Mrs Kalyani? to American English
      test("Translate Have you met Mrs Kalyani?", () => {
        translator.setText("Have you met Mrs Kalyani?");
        translator.translate();
        assert.equal(translator.translation, "Have you met Mrs. Kalyani?");
      });
      // Translate Prof Joyner of King's College, London. to American English
      test("Translate Prof Joyner of King's College, London.", () => {
        translator.setText("Prof Joyner of King's College, London.");
        translator.translate();
        assert.equal(
          translator.translation,
          "Prof. Joyner of King's College, London."
        );
      });
      // Translate Tea time is usually around 4 or 4.30. to American English
      test("Translate Tea time is usually around 4 or 4.30.", () => {
        translator.setText("Tea time is usually around 4 or 4.30.");
        translator.translate();
        assert.equal(
          translator.translation,
          "Tea time is usually around 4 or 4:30."
        );
      });
    });
  });
  suite("Highlights", () => {
    before(() => {
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

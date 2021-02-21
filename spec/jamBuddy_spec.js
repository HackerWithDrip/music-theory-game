const { JamBuddy } = require(`../src/jamBuddy.js`);
let buddy = new JamBuddy();
let notes = buddy.selectNotes();
buddy.ans = ["Db", "A#"];

describe("semitone difference", () => {
    it(`should check if the output is an array`, () => {
        expect(Array.isArray(buddy.ans)).toBe(true);
    });

    it(`should check if the notes array is of length 2 i.e the output array has two notes`, () => {
        expect(buddy.ans.length).toBe(2);
    });

    it(`should be true if the interval difference between A# and Db is checked to be equal to 9, to complete the circle`, () => {
        expect(buddy.checkAnswer(9)).toBe(true);
    });

    it(`should be false if the interval difference between G and B is checked to be equal to any number besides 4`, () => {
        expect(buddy.checkAnswer(8)).toBe(false);
    });

    it(`should check if the output of the selectNotes Method is an array `, () => {
        expect(Array.isArray(notes)).toBe(true);
    });

    it(`should check if the notes array is of length 2 i.e the output array of the selectNotes has two notes`, () => {
        expect(notes.length).toBe(2);
    });
});
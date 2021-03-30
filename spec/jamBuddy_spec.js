const { JamBuddy } = require(`../src/jamBuddy.js`);
const fs = require(`fs`);
let buddy = new JamBuddy();
let notes = buddy.selectNotes();
buddy.ans = ["Db", "A#"];
const { JSDOM } = require(`jsdom`);
const html = fs.readFileSync("index.html");
const { document } = new JSDOM(html).window;
global.document = document;

describe("semitone difference", () => {
    it(`should check if the output is an array`, () => {
        expect(Array.isArray(buddy.ans)).toBe(true);
    });

    it(`should check if the notes array is of length 2 i.e the output array has two notes`, () => {
        expect(buddy.ans.length).toBe(2);
    });

    it(`should be true if the interval difference between Db and A# is checked to be equal to 9, to complete the circle`, () => {
        expect(buddy.checkAnswer(9)).toBe(true);
    });

    it(`should be false if the interval difference between any notes is checked to be greater than 11`, () => {
        expect(buddy.checkAnswer(13)).toBe(false);
    });

    it(`should be false if the interval difference between Db and A# is checked to be equal that of  A# and Db, which is 3,`, () => {
        expect(buddy.checkAnswer(3)).toBe(false);
    });

    it(`should check if the output of the selectNotes Method is an array `, () => {
        expect(Array.isArray(notes)).toBe(true);
    });

    it(`should check if the notes array is of length 2 i.e the output array of the selectNotes has two notes`, () => {
        expect(notes.length).toBe(2);
    });
});

describe("The Graphical User Interface's DOM", () => {
    let dom;
    beforeEach((complete) => {
        JSDOM.fromFile("index.html", {}).then((ans) => {
            dom = ans;
            complete();
        });
    });

    it("should have a submit button on the interface", () => {
        let submitButton = dom.window.document.querySelector("submit-value-btn");
        expect(submitButton).not.toEqual("");
    });

    it("should have a div element for the game to display the results", () => {
        let divElement = dom.window.document.querySelector("div");
        expect(divElement).not.toBe(null);
    });

    it("get notes div should not be null when button is clicked", () => {
        dom.window.onModulesLoaded = () => {
            let event = new dom.window.MouseEvent("click");
            let getNotesButton = dom.window.document.getElementById("get-notes-button");
            let notesDisplayed = dom.window.document.getElementsById("notes");
            getNotesButton.dispatchEvent(event);
            expect(getNotesButton).not.toBe(null);
            expect(notesDisplayed.textContent).not.toBe(null);
        };
    });
});
class JamBuddy {
    constructor() {
        this.noteList = ['A', ['A#', 'Bb'], 'B', 'C', ['C#', 'Db'], 'D', ['D#', 'Eb'], 'E', 'F', ['F#', 'Gb'], 'G', ['G#', 'Ab']];
    }

    selectNotes() {
        this.ans = [];
        this.randomNotes = [
            this.noteList[Math.floor(Math.random() * this.noteList.length)],
            this.noteList[Math.floor(Math.random() * this.noteList.length)],
        ];

        for (let i in this.randomNotes) {
            if (Array.isArray(this.randomNotes[i])) {
                this.ans.push(this.randomNotes[i][Math.floor(Math.random() * this.randomNotes[i].length)]);
            } else {
                this.ans.push(this.randomNotes[i]);
            }
        }
        return this.ans;
    }

    checkAnswer(diff) {
        let firstNotePosition, secondNotePosition, result;
        if (this.noteList.indexOf(this.ans[0]) == -1 || this.noteList.indexOf(this.ans[1]) == -1) {
            for (let j in this.noteList) {
                if (this.noteList[j].length == 2 && this.noteList[j][0] == this.ans[0]) {
                    firstNotePosition = this.noteList.indexOf(this.noteList[j]);
                } else if (this.noteList[j].length == 2 && this.noteList[j][1] == this.ans[0]) {
                    firstNotePosition = this.noteList.indexOf(this.noteList[j]);
                } else if (this.noteList[j].length == 2 && this.noteList[j][0] == this.ans[1]) {
                    secondNotePosition = this.noteList.indexOf(this.noteList[j]);
                } else if (this.noteList[j].length == 2 && this.noteList[j][1] == this.ans[1]) {
                    secondNotePosition = this.noteList.indexOf(this.noteList[j]);
                } else if (this.noteList[j] == this.ans[0]) {
                    firstNotePosition = this.noteList.indexOf(this.noteList[j]);
                } else if (this.noteList[j] == this.ans[1]) {
                    secondNotePosition = this.noteList.indexOf(this.noteList[j]);
                }
            }
        } else {
            firstNotePosition = this.noteList.indexOf(this.ans[0]);
            secondNotePosition = this.noteList.indexOf(this.ans[1]);
        }

        if (firstNotePosition > secondNotePosition) {
            result = this.noteList.length + secondNotePosition - firstNotePosition;
        } else if (secondNotePosition > firstNotePosition) {
            result = secondNotePosition - firstNotePosition;
        } else {
            result = 0;
        }
        return Number(diff) == result;
    }
}

let buddy = new JamBuddy();

let generateNotes = () => {
    return (
        (document.getElementById('notes').innerText = buddy.selectNotes()),
        (document.querySelector('.feedback').innerText = ''),
        (document.querySelector('.input-answer').value = null)
    );
};

let submission = () => {
    let inputAnswer = document.querySelector('.input-answer').value;
    let isCorrect = buddy.checkAnswer(inputAnswer);

    if (inputAnswer == '' || inputAnswer > 11 || inputAnswer < 0) {
        return (document.querySelector('.feedback').style.color = `white`,
            document.querySelector('.feedback').innerText = `Please enter any number from 0 to 11`)

    } else if (isCorrect == true) {
        return (document.querySelector('.feedback').style.color = 'green',
            document.querySelector('.feedback').innerText = `You got it right .Well Done!`)
    } else if (isCorrect == false) {
        return (document.querySelector('.feedback').style.color = 'red',
            document.querySelector('.feedback').innerText = `Wrong answer! Try again`)
    }
};

let getNotes = document.querySelector('.get-notes-btn');
let submitValue = document.querySelector('.submit-value-btn');

getNotes.addEventListener('click', generateNotes)
submitValue.addEventListener('click', submission);
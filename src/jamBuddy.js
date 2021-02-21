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


module.exports = { JamBuddy };
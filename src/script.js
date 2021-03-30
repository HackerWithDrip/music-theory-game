let buddy = new JamBuddy();
let notes = buddy.noteList;
let feedbackMsg = document.getElementById('feedback');
let getNotes = document.getElementById('get-notes-btn');
let submitValue = document.getElementById('submit-value-btn');
let notesDisplayed = document.getElementById('notes');
let revealAnswerBtn = document.getElementById('reveal-answer-btn');
let explain = document.getElementById('explanation');
let streak = document.getElementById('score');
let cnt = 0;
let explanationArray = explain.children;

let generateNotes = () => {
    notesDisplayed.innerHTML = buddy.selectNotes()
    feedbackMsg.innerHTML = ''
    document.getElementById('input-answer').value = null
    streak.innerHTML = `Streak: ${cnt}`
    for (let i in explanationArray) {
        explanationArray[i].innerHTML = '';
        explanationArray[i].style.backgroundColor = "white";
    }
};

let submission = () => {
    let inputAnswer = document.getElementById('input-answer').value;
    let isCorrect = buddy.checkAnswer(inputAnswer);

    if (inputAnswer == '' || inputAnswer > 11 || inputAnswer < 0) {
        feedbackMsg.style.color = `white`
        feedbackMsg.innerHTML = `>> Please enter any number from 0 to 11 <<`
        cnt = 0;
        streak.innerHTML = `Streak: ${cnt}`;
    } else if (isCorrect == true) {
        streak.innerHTML = `Streak: ${cnt = cnt + 1}`
        feedbackMsg.style.color = 'green'
        feedbackMsg.innerHTML = `>> You got it right. Well Done! <<`
        setTimeout(() => {
            generateNotes();
        }, 3000);
    } else if (isCorrect == false) {
        feedbackMsg.style.color = 'red'
        feedbackMsg.innerHTML = `>> Wrong answer! Try again <<`
        cnt = 0;
        streak.innerHTML = `Streak: ${cnt}`;
    }
};

let revealAnswer = () => {
    let correct = [buddy.checkAnswer(0), buddy.checkAnswer(1), buddy.checkAnswer(2), buddy.checkAnswer(3), buddy.checkAnswer(4), buddy.checkAnswer(5), buddy.checkAnswer(6), buddy.checkAnswer(7), buddy.checkAnswer(8), buddy.checkAnswer(9), buddy.checkAnswer(10), buddy.checkAnswer(11)];
    feedbackMsg.style.color = 'orange'

    for (let i in correct) {
        if (correct[i] == true) {
            feedbackMsg.innerHTML = `>>> The correct answer is ${i} <<<`
        }
    }

    for (let i in explanationArray) {
        explanationArray[i].innerHTML = notes[i]
    }

    if (notes.indexOf(buddy.ans[0]) == -1 || notes.indexOf(buddy.ans[1]) == -1) {
        for (let j in notes) {
            if (notes[j].length == 2 && notes[j][0] == buddy.ans[0]) {
                explanationArray[j].style.backgroundColor = "orange";
            } else if (notes[j].length == 2 && notes[j][1] == buddy.ans[0]) {
                explanationArray[j].style.backgroundColor = "orange";
            } else if (notes[j].length == 2 && notes[j][0] == buddy.ans[1]) {
                explanationArray[j].style.backgroundColor = "orange";
            } else if (notes[j].length == 2 && notes[j][1] == buddy.ans[1]) {
                explanationArray[j].style.backgroundColor = "orange";
            } else if (notes[j] == buddy.ans[0]) {
                explanationArray[j].style.backgroundColor = "orange";
            } else if (notes[j] == buddy.ans[1]) {
                explanationArray[j].style.backgroundColor = "orange";
            }
        }
    } else {
        explanationArray[notes.indexOf(buddy.ans[0])].style.backgroundColor = "orange";
        explanationArray[notes.indexOf(buddy.ans[1])].style.backgroundColor = "orange";
    }
    return (explanationArray)

};

window.onload = generateNotes;
getNotes.onclick = generateNotes;
submitValue.onclick = submission;
revealAnswerBtn.onclick = revealAnswer;
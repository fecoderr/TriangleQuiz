let formquest = document.forms[0];
let output = document.querySelector('.output');
let questionSet = document.querySelectorAll('.questSet');
let submitBtn = document.querySelector('.subBtn');
let score = 0;


const correctanswers = [
    "one right angle",
    "right angled",
    "no",
    "Equilateral triangle"
];

formquest.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectAns = new FormData(formquest);
    let index = 0;
    for (let value of selectAns) {
        if (value[1] == correctanswers[index]) {
            questionSet[index].style.backgroundColor = "green";
            score++;
        }
        index++;
    }
    output.innerText = "The Score is " + score;
    output.style.fontWeight = "bold";
    output.style.fontSize = "1em";
    submitBtn.style.display = "none";
});
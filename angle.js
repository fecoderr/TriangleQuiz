let angle1 = document.querySelector('#inp1');
let angle2 = document.querySelector('#inp2');
let angle3 = document.querySelector('#inp3');
let result = document.querySelector('.output');

function refreshOutput() {
    result.innerText = "";
}

function displayMsg(text) {
    result.innerText = text;
}

document.querySelector('.submitBtn').addEventListener("click", () => {
    refreshOutput();
    let sum = 0;
    let A1 = Number(angle1.value);
    let A2 = Number(angle2.value);
    let A3 = Number(angle3.value);
    if (A1 == "" || A2 == "" || A3 == "") {
        displayMsg("Please enter all the three angles");
    } else {
        sum = A1 + A2 + A3;
        if (sum === 180) {
            displayMsg("Yey! these angles can make a triangle");
        } else {
            displayMsg("Oops! these angles can not make a triangle");
        }
    }

});
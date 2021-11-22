let side1 = document.querySelector('#side1');
let side2 = document.querySelector('#side2');
let output = document.querySelector('.output');

const findHypotenuse = (base, perpendicular) => {
    const bSquare = base ** 2;
    const pSquare = perpendicular ** 2;
    const sum = bSquare + pSquare;
    const hypotenuse = Math.sqrt(sum);
    return hypotenuse;
};

function refreshResult() {
    output.innerText = "";
}

function displayMsg(text) {
    output.innerText = text;
}

document.querySelector('.submitBtn2').addEventListener("click", () => {
    refreshResult();
    let s1 = Number(side1.value);
    let s2 = Number(side2.value);
    if (s1 == "" || s2 == "") {
        displayMsg("Please enter both values to proceed");
    } else {
        let result = findHypotenuse(s1, s2);
        displayMsg(result);
    }
});
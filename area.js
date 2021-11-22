let side1 = document.querySelector('#side1');
let side2 = document.querySelector('#side2');
let side3 = document.querySelector('#side3');
let output = document.querySelector('.output');
let errmsg = document.querySelector('.msg');

function refreshRecord() {
    output.innerText = "";
    errmsg.innerText = "";
}

function displayMsg(text) {
    output.innerText = text;
}

document.querySelector('.calcBtn').addEventListener("click", () => {
    refreshRecord();
    let s1 = Number(side1.value);
    let s2 = Number(side2.value);
    let s3 = Number(side3.value);
    if (s1 == "" || s2 == "" || s3 == "") {
        errmsg.innerText = "Please enter all 3 sides value to proceed";
    } else {
        if (s1 + s2 > s3 && s2 + s3 > s1 && s1 + s3 > s2) {
            let s = (s1 + s2 + s3) / 2;
            let product = s * (s - s1) * (s - s2) * (s - s3);
            displayMsg(Math.sqrt(product).toFixed(4) + " units");
        } else {
            errmsg.innerText = "Please enter valid side lengths such that addition of two sides of triangle is greater than 3rd side length";
        }
    }
});
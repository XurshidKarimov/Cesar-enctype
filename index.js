let enteringArea = document.getElementById("entering"),
    resultArea = document.getElementById("result"),
    startButton = document.getElementById("start"),
    stepInput = document.getElementById("stepInput");
    step = null;

//enctype
function replacer(match, offset, string) {
    let letterNumber = match.codePointAt();
    let resultLetterNumber = letterNumber + +step;
    if (letterNumber >= 65 && letterNumber <= 90) {
        if (resultLetterNumber > 90) {
            return String.fromCodePoint(resultLetterNumber - 26);
        }
        return String.fromCodePoint(resultLetterNumber);
    }
    else if (letterNumber >= 97 && letterNumber <= 122) {
        if (resultLetterNumber > 122) {
            return String.fromCodePoint(resultLetterNumber - 26);
        }
        return String.fromCodePoint(resultLetterNumber);
    }
}

startButton.addEventListener("click", (event) => {
    step = stepInput.value;
    if(event.target.dataset.type === "enctype"){
        event.target.innerText = "Restep";
        event.target.dataset.type = "restep";
        stepInput.setAttribute("disabled", "true");
    }
    else{
        event.target.innerText = "Enctype";
        event.target.dataset.type = "enctype";
        stepInput.removeAttribute("disabled");
    }
})


enteringArea.addEventListener("input", () => {
    let textForEncrypt = enteringArea.innerText;
    resultArea.textContent = textForEncrypt.replace(/[a-z]/gi, replacer);
})
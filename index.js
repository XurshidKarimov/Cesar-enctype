'use strict';

let enteringArea = document.getElementById("entering"),
    resultArea = document.getElementById("result"),
    startButton = document.getElementById("start"),
    stepInput = document.getElementById("stepInput"),
    darkMode = document.getElementById("darkMode"),
    [html] = document.getElementsByTagName("html"),
    copyBtn = document.getElementById("copyBTN"),
    step = null;



if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    darkMode.innerText = "Light mode";
}
else {
    html.classList.remove("dark");
    darkMode.innerText = "Dark mode";
}


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

darkMode.addEventListener("click", (event) => {
    html.classList.toggle("dark");
    if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
        event.target.innerText = "Light mode";
    }
    else {
        localStorage.setItem("theme", "light");
        event.target.innerText = "Dark mode";
    }
})

startButton.addEventListener("click", (event) => {
    step = stepInput.value;
    if (event.target.dataset.type === "enctype") {
        event.target.innerText = "Restep";
        event.target.dataset.type = "restep";
        stepInput.setAttribute("disabled", "true");
    }
    else {
        event.target.innerText = "Enctype";
        event.target.dataset.type = "enctype";
        stepInput.removeAttribute("disabled");
    }
})

enteringArea.addEventListener("input", () => {
    let textForEncrypt = enteringArea.innerText;
    resultArea.textContent = textForEncrypt.replace(/[a-z]/gi, replacer);
})

result.addEventListener("copy", (event) => {
    event.preventDefault();
})

copyBtn.addEventListener("click", (event) => {
    event.target.classList.add("after:animate-fade");
    navigator.clipboard.writeText(resultArea.innerText);
    setInterval(() => {
        event.target.classList.remove("after:animate-fade");
    }, 900);
})
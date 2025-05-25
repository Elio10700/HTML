function clearScreen() {
    const resultElement = document.getElementById("result");
    resultElement.value = "";
    resultElement.dataset.lastResult = "false";
}

function setScreenValue(value) {
    const resultElement = document.getElementById("result");
    if (
        resultElement.value === "Pls enter an expression" ||
        resultElement.value === "Invalid expression" ||
        resultElement.dataset.lastResult === "true"
    ) {
        resultElement.value = "";
        resultElement.dataset.lastResult = "false";
    }
    if (value === ".") {
        const current = resultElement.value;
        const lastNum = current.split(/[-+*/%]/).pop();
        if (lastNum.includes(".")) return;
    }
    resultElement.value += value;
}

function calculateResult() {
    const resultElement = document.getElementById("result");
    let exp = resultElement.value.trim();
    exp = exp.replace(/x/gi, '*');
    if (exp === "") {
        resultElement.value = "Pls enter an expression";
        resultElement.dataset.lastResult = "true";
    } else {
        try {
            resultElement.value = eval(exp);
        } catch (e) {
            resultElement.value = "Invalid expression";
        }
        resultElement.dataset.lastResult = "true";
    }
}

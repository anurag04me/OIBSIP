function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    let display = document.getElementById("display");
    display.value += number;
}

function appendOperator(operator) {
    let display = document.getElementById("display");
    if (display.value !== "") {
        display.value += operator;
    }
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

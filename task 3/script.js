let display = document.getElementById("display");


// Add numbers and operators
function appendValue(value) {
    display.value += value;
}


// Clear the display
function clearDisplay() {
    display.value = "";
}


// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// Calculate the answer
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

    }
}


// Keyboard support
document.addEventListener("keydown", function(event) {

    let key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%" ||
        key === "."
    ) {

        appendValue(key);

    }

    else if (key === "Enter") {

        calculate();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

    else if (key === "Escape") {

        clearDisplay();

    }

});
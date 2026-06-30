function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        alert("Invalid Expression");
    }
}
function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
/*document.addEventListener("keydown", function(event) {

    const key = event.key;

    if (!isNaN(key) || "+-.".includes(key)) {
        appendValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        backspace();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});*/
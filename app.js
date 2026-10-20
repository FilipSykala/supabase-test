const form = document.querySelector("#test-form");
const status = document.querySelector("#form-status");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    const values = Object.fromEntries(new FormData(form).entries());
    result.textContent = JSON.stringify(values, null, 2);
    result.hidden = false;
    status.textContent = "Formularz aktywowany. Poniżej znajdują się dane testowe; nie zostały zapisane w bazie.";
});

form.addEventListener("input", () => {
    status.textContent = "";
    result.hidden = true;
});
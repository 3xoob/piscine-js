document.addEventListener("keydown", function (event) {
    compose(event);
});

function compose(e) {
    if (!e) {
        return;
    }
    const charCode = e.key.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
        const div = document.createElement("div");
        div.classList.add("note");
        const colorValue = (255 / 26) * (charCode - 97);
        div.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        div.textContent = e.key;
        document.body.appendChild(div);
    } else if (e.key === "Backspace") {
        const notes = document.getElementsByClassName("note");
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    } else if (e.key === "Escape") {
        const notes = document.getElementsByClassName("note");
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}

export { compose };

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", createCircle);
    document.addEventListener("mousemove", moveCircle);
    setBox();
});

let lastCircle = null;

function createCircle(event) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.backgroundColor = "white";
    circle.style.position = "absolute";
    circle.style.left = `${event.clientX - 10}px`; // Center the circle on the mouse
    circle.style.top = `${event.clientY - 10}px`;  // Center the circle on the mouse
    document.body.appendChild(circle);
    lastCircle = circle;
}

function moveCircle(event) {
    if (lastCircle) {
        const circleRect = lastCircle.getBoundingClientRect();
        const box = document.querySelector(".box");

        if (box) {
            const boxRect = box.getBoundingClientRect();
            const insideBox = (
                circleRect.left > boxRect.left &&
                circleRect.right < boxRect.right &&
                circleRect.top > boxRect.top &&
                circleRect.bottom < boxRect.bottom
            );

            if (insideBox) {
                lastCircle.style.backgroundColor = "var(--purple)";
                lastCircle = null;
                return;
            }
        }

        lastCircle.style.left = `${event.clientX - 10}px`;
        lastCircle.style.top = `${event.clientY - 10}px`;
    }
}

function setBox() {
    const box = document.createElement("div");
    box.className = "box";
    box.style.position = "absolute";
    box.style.left = "50%";
    box.style.top = "50%";
    box.style.transform = "translate(-50%, -50%)";
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.border = "1px solid black";
    document.body.appendChild(box);
}

export { createCircle, moveCircle, setBox };

function changeText() {
    document.getElementById("heading").textContent = "Hello, World!";
    document.getElementById("paragraph").textContent = "This is a new paragraph text.";
}

function toggleHighlight() {
    const paragraph = document.getElementById("paragraph");
    if (paragraph.classList.toggle("highlight")) {
        paragraph.textContent = "This paragraph is highlighted!";
    }
    else {
        paragraph.textContent = "This is a new paragraph text.";
    }
}

function addElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added to the DOM.";
    newElement.id = "new-paragraph";

document.getElementById("container").appendChild(newElement);
    newElement.classList.add("new-paragraph-style");
    document.getElementById("container").appendChild(newElement);
}
function removeElement() {
    const elementRemove = document.getElementById("new-paragraph");
    if (elementRemove) {
        elementRemove.remove();
    }
}
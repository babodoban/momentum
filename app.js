const h1 = document.querySelector(".title");

function handleTitleClick() {
    if (h1.style.color = "black") {
        h1.style.color = "blue";
    } else {
        h1.style.color = "black";
    }
    console.log(h1.style.color);
}

function handleMouseEnter () {
    h1.innerText = "mouse is here!";
}

function handleMouseLeave () {
    h1.innerText = "mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

function handleWidnowCopy() {
    alert("Catch the Copy actoin!")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWidnowCopy);
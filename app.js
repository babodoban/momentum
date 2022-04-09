const h1 = document.querySelector(".title");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;

    if (currentColor === "blue") {
        newColor = "black";
    } else {
        newColor = "blue";
    }
    
    h1.style.color = newColor;

    console.log(h1.style.color);
}

h1.addEventListener("click", handleTitleClick);

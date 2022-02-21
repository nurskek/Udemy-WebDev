const container = document.querySelector("#container");
const newImg = document.createElement("img");

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let counter = 1;
for(let i = 1; i <= 151;i++) {
    const newImg = document.createElement("img");
    newImg.classList.add("images");
    newImg.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
    container.appendChild(newImg);
}
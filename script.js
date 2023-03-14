let divContainer = document.querySelector(".grid-container");

let gridMember

for (let i = 0; i < (16*16) ; i++) {
    console.log(i);
    gridMember = document.createElement("div");
    divContainer.append(gridMember)
    gridMember.style.cssText = "padding: 10px; background-color: white; border: black solid; border-width: 1px"
}


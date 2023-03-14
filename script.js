let divContainer = document.querySelector(".grid-container");

let gridMember

let isMouseDown
let isMouseOver


for (let i = 0; i < (16*16) ; i++) {

    gridMember = document.createElement("div");
    divContainer.append(gridMember)
    gridMember.style.cssText = "padding: 10px;background-color: white; border: black solid; border-width: 1px"
    gridMember.setAttribute("draggable", false)

    gridMember.addEventListener('mouseup', () => {isMouseDown = false})
    gridMember.addEventListener('mousedown', () => { isMouseDown = true})

    gridMember.addEventListener('mouseover', (event) => {isMouseOver=true 
        if (isMouseDown && isMouseOver) {
        event.target.style.backgroundColor = 'black'
        }
      })



    
}


let gridContainer = document.querySelector(".grid-container");
let html = document.querySelector('html')
let input = document.querySelector('input')
let generateBtn = document.querySelector(".generate-btn")
let clearBtn = document.querySelector(".clear-btn")


let gridMember

let isMouseDown
let isMouseOver



let drawGrid = () => {
  for (let i = 0; i < ((input.value) ** 2) ; i++) {
    console.log(input.value)
    gridMember = document.createElement("div");
    gridContainer.append(gridMember)
    gridContainer.style.maxWidth = `${input.value * 21.6}px`
    gridContainer.style.maxheight = `${input.value * 21.6}px`

    gridMember.style.cssText = "padding: 10px;background-color: white; border: black solid; border-width: 1px"
    gridMember.setAttribute("draggable", false)

   
    gridMember.addEventListener('mousedown', () => { isMouseDown = true})
    gridMember.addEventListener('click', (event) => {event.target.style.backgroundColor = 'black'})
    html.addEventListener('mouseup',() => {isMouseDown = false})


    gridMember.addEventListener('mouseover', (event) => {
      if ((isMouseDown === true)) {
      event.target.style.backgroundColor = 'black'
      }
    })

  }

  
}

let clearGrid = () => {
  for (let i = 0; i < ((input.value) ** 2) ; i++) {
    gridContainer.innerHTML = '';
}
}

generateBtn.addEventListener('click', () => {
  gridContainer.innerHTML = '';
  drawGrid()
})

clearBtn.addEventListener('click', () => { clearGrid()})







    

/** For Grid Array
    *  
    * let gridArray = [];
    gridArray.push(gridMember)
    gridArray.forEach(element => {element.addEventListener('mouseover', (event) => {
      if ((isMouseDown === true)) {
      event.target.style.backgroundColor = 'black'
      }
    })})
    
    **/

    







/**
 * for 256 : 360px
 * for 400 : 562.5px
 * 
 */
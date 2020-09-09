function processInput() {

    // INPUT PART
    let nameInput = document.getElementById("name")  // get the input element with id `name`
    // below is also  let nameValue = document.getElementById("name").value
    let nameValue = nameInput.value                 // get the input value
    console.log("name: " + nameValue)



    // CANVAS PART
    let canvasElement = document.getElementById("canvas")  // get the div element with id `canvas`
    let canvasText = canvasElement.innerText               // get the canvas element text
    
    console.log("canvas text: " + canvasText)

    canvasElement.innerText = nameValue                   // set the inner text of the canvas element
}


document.getElementById("name").addEventListener('keydown', processInput)
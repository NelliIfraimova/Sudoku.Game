//container for div cells making up the game grid
const container= document.createElement('container')
//game reset button
const resetButton= document.createElement('button')
resetButton.id= 'reset'
resetButton.innerText= 'reset'
//accessing the navigation bar
const nav= document.querySelector('nav')
//adding reset button to nav bar
nav.append(resetButton)
//number of rows in grid
const rows = 9 
//number of columns in grid
const columns = 9
//level buttons
const easyButton= document.createElement('button')
easyButton.id= 'easy'
easyButton.innerText= 'easy'
const medButton= document.createElement('button')
nav.append(easyButton)
medButton.id= 'medium'
medButton.innerText= 'medium'
nav.append(medButton)
const hardButton= document.createElement('button')
nav.append(hardButton)
hardButton.id= 'hard'
hardButton.innerText= 'hard'
nav.append(hardButton)
//displays rules
const rulesButton= document.createElement('button')
nav.append(rulesButton)
rulesButton.id= 'rules'
rulesButton.innerText= 'rules'
nav.append(rulesButton)
//adds container to the body 
document.body.append(container)
//creates the container rows
for (let i = 1; i <= rows; i++) {
    //creates the container columns
    for (let j = 0; j < columns; j++) {
        //accesses the game cell divs
        const cell= document.createElement('div')
        //adds the divs to the container
        container.append(cell)
        //adds a class of "cell" to each grid div
        cell.classList.add("cell");
        //converts the column values to the alphabet
        let chr = String.fromCharCode(97 + j); // where j is 0, 1, 2
        //turns the column letters uppercase
        const letter= chr.toUpperCase()
        //labels each div with two classes, the row number and column alphabet 
        cell.className= `cell ${letter} ${i}`
    }
  }

  //we need a function that allows each cell to be clicked, the user should be able to input a value 1-9 to the cell
  //if the value is invalid, the box should flash red for 2 seconds
  //if the value already exists in the row, column and block, the cell should flash red
  //otherwise the cell should accept the value and flash green for 1 second, and no longer be clickable
const cells= document.querySelectorAll('.cell')
// console.log(cells)

/////////////
//when the user clicks on a cell, we have to get the cell's row and column class
////////
// make sure the input does not exist within that row and column 


cells.forEach(cell => {
   

    cell.addEventListener('click', function(event) {
        //when we click on the cell it has to grab its row and column class
        const cellClassColumn = cell.className[5];
        const cellClassRow = cell.className[7];
        console.log(cellClassColumn, cellClassRow)
        let num = prompt("1-9")
        if (num >= 1 && num <= 9){

            if(cellClassRow.innerHTML === num || cellClassColumn.innerHTML === num){
                //we need to read the input of all row and column divs that belong to that intersection and make sure the num does not exist in that intersection
                console.log(`invalid ${cellClassColumn} ${cellClassRow} number already exists in the array`)
       
            } else{
                cell.innerHTML= num
                cell.style.textAlign= "center"
                cell.style.fontSize= "24px"
                console.log(`valid ${cellClassColumn} ${cellClassRow} ${cell.innerHTML}`)
            }
            } else {
                console.log(`invalid, please enter a digit 1-9 ${cellClassColumn} ${cellClassRow}`)
            }
        
    })
})
 //

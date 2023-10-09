// size of matrix and lenght of a winning line
var size = 15;
var len = 5;

// element we're working with
var myMatrix = document.getElementById("innerMatrix");

// size and lenght of the board
var mySize = document.getElementById("size");
var myLenght = document.getElementById("lenght");
var mySubmit = document.getElementById("submit");

// declaration of player turn
var turn = true;

// players' array of coordinates they clicked on
var p1 = [];
var p2 = [];

//  ________
// |-------|
// |-------|
// |-------|
// |-------|
// ‾‾‾‾‾‾‾‾
// sort from left to right starting at the top and evlauate a win
function xSortArray(array) {
    // sort array
    array.sort((a, b)=> {
        if (a.y === b.y){
            return a.x - b.x;
        } else {
            return a.y - b.y;
        }
    });

    // declaring lastX and lastY, to remember last coordinates and check
    let lastX;
    let lastY;
    let check = 1;

    // cycle through the whole array
    for(var i = 0; i < array.length; i++) {
        // if lastX and lastY weren't set yet (i == 0), set them to current coordinates
        if(i == 0) {
            lastY = array[0].y;
            lastX = array[0].x;
        }
        // if in the same row and a column + 1 compared to the last coordinates, increment check
        if(array[i].y === lastY && array[i].x === lastX+1) {
            check++;
        // else set check to 1
        } else {
            check = 1;
        }
        // if check is the leng of len, return true
        if(check === len) {
            return true;
        }
        // if in a differnet row, set lastY to current y coordinate
        if(array[i].y != lastY) {
            lastY = array[i].y;
        }
        // set lastX to current x coordinate
        lastX = array[i].x;
    }
    // if neither player won, return false
    return false;
}

//  ________
// | | | | |
// | | | | |
// | | | | |
// | | | | |
// ‾‾‾‾‾‾‾‾
// sort from top to bottom starting from the left and evlauate a win
function ySortArray(array) {
    // sort array
    array.sort((a, b)=> {
        if (a.x === b.x){
            return a.y - b.y;
        } else {
            return a.x - b.x;
        }
    });

    // declaring lastX and lastY, to remember last coordinates and check
    let lastX;
    let lastY;
    let check = 1;

    // cycle through the whole array
    for(var i = 0; i < array.length; i++) {
        // if lastX and lastY weren't set yet (i == 0), set them to current coordinates
        if(i == 0) {
            lastY = array[0].y;
            lastX = array[0].x;
        }
        // if in the same column and a row + 1 compared to the last coordinates, increment check
        if(array[i].x === lastX && array[i].y === lastY+1) {
            check++;
        // else set check to 1
        } else {
            check = 1;
        }
        // if check is the leng of len, return true
        if(check === len) {
            return true;
        }
        // if in a differnet column, set lastX to current x coordinate
        if(array[i].x != lastX) {
            lastX = array[i].x;
        }
        // set lastY to current y coordinate
        lastY = array[i].y;
    }
    // if neither player won, return false
    return false;
}

//  ______
// |\\   |
// |\\\  |
// | \\\ |
// |  \\\|
// ‾‾‾‾‾‾
// function to cycle through left to bottom diagonals to evaluate a win
function sortDiagLeftToBottom(array) {
    // iX and iY are starting positions
    let iX = 0;
    let iY = size-len;
    // x and y cycle through coordinates
    let x = iX;
    let y = iY;
    // check will check if a coordinate was found in players' arrays
    let check = false;
    // cnt counts clicked elements in a row diagonally 
    let cnt = 1;
    // lastX and lastY remember last found coordinates
    let lastX;
    let lastY;
    // cycle through minimum ammount cycles (it's useless to cycle through diagonals shorter than 'len')
    for(let i = 0; i < 2*(size-len)+1; i++) {
        // cycle until x or y reaches end of matrix
        while(y != size && x != size) {
            // check if x and y can be found in array
            for(let j = 0; j < array.length; j++) {
                if(array[j].x === x && array[j].y === y) {
                    check = true;
                    break;
                }
            }
            // increment cnt if coordinates were found and lastX and lastY are 1 less than current coordinates
            if(check === true && lastX === x-1 && lastY === y-1) {
                cnt++;
            } else {
                // else set cnt to 1
                cnt = 1;
            }
            // if number of clicked elements is greater than or equal to 'len' return true
            if(cnt >= len) {
                return true;
            }
            // if current coordinates were found, set lastX and lastY to those coordinates
            if(check === true) {
                lastX = x;
                lastY = y;
            } 
            // set check to false and increment x and y
            check = false
            x++; y++;
        }
        // if starting position iX is smaller than size-len, increment it
        if(x === size) { iX++; }
        // set x to starting position
        x = iX;
        // decrement starting position iY if iY is greater than 0
        if(iY > 0) { iY--; }
        // set y to starting position
        y = iY;
    }
    // if number of clicked elements was smaller than 'len' return false
    return false;
}

//  _______
// |   ///|
// |  /// |
// | ///  |
// |///   |
// ‾‾‾‾‾‾‾
// function to cycle through left to top diagonals to evaluate a win
function sortDiagLeftToTop(array) {
    // iX and iY are starting positions
    let iX = 0;
    let iY = len-1;
    // x and y cycle through coordinates
    let x = iX;
    let y = iY;
    // check will check if a coordinate was found in players' arrays
    let check = false;
    // cnt counts clicked elements in a row diagonally
    let cnt = 1;
    // lastX and lastY remember last found coordinates
    let lastX;
    let lastY;
    // cycle through minimum ammount cycles (it's useless to cycle through diagonals shorter than 'len')
    for(let i = 0; i < 2*(size-len)+1; i++) {
        // cycle until x or y reaches end of matrix
        while(y != -1 && x != size) {
            // check if x and y can be found in array
            for(let j = 0; j < array.length; j++) {
                if(array[j].x === x && array[j].y === y) {
                    check = true;
                    break;
                }
            }
            // increment cnt if coordinates were found and lastX is 1 less and lastY is 1 greater than current coordinates
            if(check === true && lastX === x-1 && lastY === y+1) {
                cnt++;
            } else {
                // else set cnt to 1
                cnt = 1;
            }
            // if number of clicked elements is greater than or equal to 'len' return true
            if(cnt >= len) {
                return true;
            }
            // if current coordinates were found, set lastX and lastY to those coordinates
            if(check === true) {
                lastX = x;
                lastY = y;
            } 
            // set check to false and increment x and decrement y
            check = false;
            x++; y--;
        }
        // if starting position iX is smaller than size-len, increment it
        if(x === size) { iX++; }
        // set x to starting position
        x = iX; 
        // increment starting position iY if iY is smaller than size-1
        if(iY < size-1) { iY++; }
        // set y to starting position
        y = iY;
    }
    // if number of clicked elements was smaller than 'len' return false
    return false;
}

// add 'a' element's id to a player's array of clicked squares 
function idArray(id) {
    if(turn === false) {
        p1.push({'x': parseInt(id), 'y': Number(id.slice(id.indexOf("-")+1,id.length))});
    } else {
        p2.push({'x': parseInt(id), 'y': Number(id.slice(id.indexOf("-")+1,id.length))});
    }
    return;
}

// function to evaluate a win
function calcWin() {
    let array;
    // set array to player's array depending on turn
    if(turn === false) {
        array = p1
    } else {
        array = p2
    }
    // call sorting functions to evaluate a win
    if(sortDiagLeftToBottom(array) === true || sortDiagLeftToTop(array) === true || xSortArray(array) === true || ySortArray(array) === true) {
        // prohibit clicking on or hovering over the board
        myMatrix.style.pointerEvents = "none";
        // announce winner
        if(turn === false) {
            alert("Vyhrál hráč č. 1!");
        } else {
            alert("Vyhrál hráč č. 2!");
        }
    }
    return;
}

// creating the board
function createCells() {
    myMatrix.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    myMatrix.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    
    // creating a size*size sized board
    for(var i = 0; i < size; i++) {
        for(var j = 0; j < size; j++) {
            // each 'a' element has a uniqe id consisting coordinates
            let newA = document.createElement("a");
            newA.id = j.toString() + "-" + i.toString();
            newA.href = "#";
            // append child
            myMatrix.appendChild(newA,myMatrix);
            // if clicked, do certain things
            newA.addEventListener("click", function() {
                // if it hasn't been clicked yet, set a color according to turn
                if (getComputedStyle(newA).backgroundColor != "rgb(111, 159, 229)" && getComputedStyle(newA).backgroundColor != "rgb(229, 111, 111)") {
                    if(turn === true) {
                        newA.style.backgroundColor = "#6F9FE5";
                        turn = false;
                    } else {
                        newA.style.backgroundColor = "#E56F6F";
                        turn = true;
                    }
                    // call function idArray
                    idArray(newA.id);
                    // check if either of the players won
                    calcWin();
                }
            });
            // change color of an 'a' element according to turn on mouseover
            newA.addEventListener("mouseover", function() {
                if (getComputedStyle(newA).backgroundColor != "rgb(111, 159, 229)" && getComputedStyle(newA).backgroundColor != "rgb(229, 111, 111)") {
                    if(turn === true) {
                        newA.style.backgroundColor = "#A0BDE8";
                    } else {
                        newA.style.backgroundColor = "#E99E9E";
                    }
                }
            });
            // change color of 'a' element to transparent on mouseout
            newA.addEventListener("mouseout", function() {
                if (getComputedStyle(newA).backgroundColor != "rgb(111, 159, 229)" && getComputedStyle(newA).backgroundColor != "rgb(229, 111, 111)") {
                    newA.style.backgroundColor = "transparent";
                }
            });
        }
    }
    return;
}

function reset()
{
    p1 = [];
    p2 = [];
    myMatrix.innerHTML = '';
    turn = true;
    size = Number(mySize.value);
    len = Number(myLenght.value);
    myMatrix.style.pointerEvents = "auto";
    createCells();
}

function resetEventListener()
{
    mySubmit.addEventListener("click", function() {
        reset();
    });
    return;
}

createCells();
resetEventListener();
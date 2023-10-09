var size = 10;
len = 5

function sort1() {
    let iX = 0
    let iY = len - 1
    let x = iX
    let y = iY
    for(let i = 0; i < 2 * (size - len) + 1; i++) {
        while(y != -1 && x != size) {
            x++; y--;
        }
        if(iY < size - 1) { iY++ }
        y = iY
        if(x === size) { iX++ }
        x = iX
    }
}

function sort2() {
    let iX = 0
    let iY = size - len
    let x = iX
    let y = iY
    for(let i = 0; i < 2 * (size - len) + 1; i++) {
        while(y != size && x != size) {
            x++; y++;
        }
        if(x === size) { iX++ }
        x = iX
        if(y === size && iY > 0) { iY-- }
        y = iY
    }
}

sort2()
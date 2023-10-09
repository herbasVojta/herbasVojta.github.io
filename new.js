// const matrixSize = [5, 5]

// const toKey = (x, y) => [y, x].join('')

// function *generateMatrix([X, Y]) {
// 	let x = 0
//   let y = 0
// 	while (x < X && y < Y) {
//     // huh?
//   	yield [toKey(x, y), { x, y }]
//     if (++x === X) {
//     	x = 0
//       y++
//     }
//   }
// }

// const matrix = new Map(generateMatrix(matrixSize))

// // console.log("matrix:")
// // console.log(matrix)

// function sortLinear(input) {
// 	return [...input.entries()].sort(([a], [b]) => a - b).map(([, value]) => value)
// }

// function *generateDiagonalSort(input, [X, Y]) {
//   const temp = new Map(input)
//   let iX = 0
//   let iY = Y - 1
//   let x = iX
//   let y = iY
  
//   let iCycle = 0

//   while (temp.size) {
//   	const key = toKey(x, y)
//   	const item = temp.get(key)
    
//     if (item) {
//       yield item
//       temp.delete(key)
//       x++
//       y++
//     } else if (iY > 0) {
//     	x = iX
//       y = --iY
//     } else {
//     	x = ++iX
//       y = iY
//     }

//     if (iCycle++ > 2 * X * Y) {
//     	console.log(iCycle)
//     	throw new Error('Expected cycle count exceeded')
//     }
//   }
// }

// function sortDiagonal(input, [X, Y]) {
//   return [...generateDiagonalSort(input, [X, Y])]
// }


// console.log('map', matrix)
// console.log('row', sortLinear(matrix))
// console.log('diagonal', sortDiagonal(matrix, matrixSize))

// var idk = {'x': 4, 'y': 3}
// var array = [{'x': 4, 'y': 3}]
// var arr = [3, 5]

var str = "13-21"
var str2 = str.slice(str.indexOf("-")+1,str.length);

console.log(parseInt(str2));
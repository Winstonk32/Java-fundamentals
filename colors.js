//Create an array named colors containing six color names: "red", "green", “pink”,“yellow”, “purple” and "blue".
let colors= ['red', 'green', 'pink', 'yellow', 'purple', 'blue']

//Access and log the second element of the colors array.
console.log(colors[1])

//Add the color "gray" to the end of the colors array.
colors.push('grey')
console.log(colors)

//Remove the first element in the array
colors.shift()
console.log(colors)

//Reverse the order of elements in the colors array.
console.log(colors.reverse())

//Sort the colors array alphabetically.
console.log(colors.sort())

//Find the length of the array
console.log(colors.length)

//Iterate through the array to print all the colors
for (let i = 0; i < colors.length; i++) {
console.log(colors[i])
}



//Remove the last element.
colors.pop()
console.log(colors)

//. Convert the array to a string.
console.log(colors.toString())
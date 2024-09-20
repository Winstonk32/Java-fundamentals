let colors = ['green', 'blue', 'red', 'brown']

//accessing the third item in the array
console.log(colors[2])


//accessing the last item in the array
console.log(colors[colors.length-1])

//replacing brown with black in the array
colors[3]='black'
console.log(colors)

//adding element to the array
colors.push('yellow')
console.log(colors)

//adding an element at the beginning of the array
colors.unshift('purple')
console.log(colors)

//removing the last item from the array
colors.pop()
console.log(colors)

//removes the first item in the array
colors.shift()
console.log(colors)

// Removes two elements from index 1
colors.splice(1,2)
console.log(colors)

//getting the length of an array
console.log(colors.length)

let shade = ['dark','smooth', 'light']

let art = colors.concat(shade)
console.log(art)

console.log(art.sort())

console.log(art.reverse())


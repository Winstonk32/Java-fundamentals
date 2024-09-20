let students = {
    name: 'Mark',
    age: 12,
    location: 'Hurlingham'
}

console.log(students)
console.log(students.location)//dot notation method on accessing item from an object
console.log(students['age'])//bracket notation method on accessing an item

//updating/rewriting data in the object
students.age = 15
console.log(students)

//adding  data in the object
students.gender = 'Male'
console.log(students)

//deleting data in the object
delete students.location
console.log(students)
console.log('Dhanaraj')

const arr = [1, 2, 3, 4, 5]

let b; 
b = arr.map(x => [x, x * 2])
console.log(b)

b = arr.flatMap(x => [x, x * 2])
console.log(b)




console.log("dhan")

const add = (a, b) => a + b;
console.log(add.toString())



let obj = {
    // name: '',
    age: 0
}

let num = Number.MAX_SAFE_INTEGER
console.log(num)
console.log(num + 2)
console.log(typeof(num + 2))



console.log(obj.name ?? "trail")
console.log(obj.name || "trail")
console.log(obj.name && "trail")
console.log(typeof(obj.name))

console.log(obj.age ?? 45)
console.log(obj.age || 45)
console.log(obj.age && 45)
console.log(typeof(obj.age))

let x = parseInt(prompt("Enter x :"))
let y = parseInt(prompt("Enter y :"))

try {
    if(x == 0) throw new ("local")
} catch(exception) {
    throw new ("Polo")
}
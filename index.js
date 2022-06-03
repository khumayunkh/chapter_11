console.log('hello world')

let a = new Set([4]) 
console.log(a)
a.add(3)
console.log(a)
a.add(3) // false
console.log(a) 
a.delete(4)
console.log(a) //[3]
a.add(4)
a.add(1)
a.add(8)
a.clear()
console.log(a) // []
a.add('hello').add(2).add(3)
console.log(a) // ['hello', 2, 3]
console.log(a.has(3)) // true
console.log(a.has('2')) // false

let x = new Set([1,2,3,4,5])
console.log(x)
let sum = 0

for(let p of x){
    sum += p
}

console.log(sum)

// let y = [...x]
// console.log(typeof y) // object 
// console.log(typeof x) // object


let t = 1
x.forEach(n=> t *=n)
console.log(t)

let y  = [1, 2, 3, 4, 5]
let o = 1
y.forEach(n=>o*=n)
console.log(o) // 120


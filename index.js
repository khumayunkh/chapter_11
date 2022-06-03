// console.log('hello world')

// let a = new Set([4]) 
// console.log(a)
// a.add(3)
// console.log(a)
// a.add(3) // false
// console.log(a) 
// a.delete(4)
// console.log(a) //[3]
// a.add(4)
// a.add(1)
// a.add(8)
// a.clear()
// console.log(a) // []
// a.add('hello').add(2).add(3)
// console.log(a) // ['hello', 2, 3]
// console.log(a.has(3)) // true
// console.log(a.has('2')) // false

// let x = new Set([1,2,3,4,5])
// console.log(x)
// let sum = 0

// for(let p of x){
//     sum += p
// }

// console.log(sum)

// // let y = [...x]
// // console.log(typeof y) // object 
// // console.log(typeof x) // object


// let t = 1
// x.forEach(n=> t *=n)
// console.log(t)

// let y  = [1, 2, 3, 4, 5]
// let o = 1
// y.forEach(n=>o*=n)
// console.log(o) // 120

//=====================
//Map

// let x = new Map()
// x.set(3,23)
// x.set('one', 3)
// console.log(x)
// console.log(x.get(3))
// x.set('two', 24)
// console.log(x.get('two'))
// let y = [...x.values()]
// console.log(y) // [23, 3, 24]
// let z = [...x.keys()]
// console.log(z) // [3, 'one', 'two']
// console.log(z[1]) // one


// let o =1
// for(let p of x.values()){
//     o += p
// }
// console.log(o)  // 51



// let x = new Int8Array([12,4,3,120])
// console.log(x) // [12,4,3,120]

// let y = new BigInt64Array(342,23,132)
// console.log(y)

let z = new Date(2010, 0, 1,23,3,2)
console.log(z) // 01.01.2010 23:03:02

let x = 'hello'
console.log(x)
let d =new Date()
console.log(d)
console.log(d.getMonth(d.getMonth() + 2))


let o = {a:2, b:7, f:[2,3,4], l:'jhello'}
let s =JSON.stringify(o)

console.log(s)
console.log(JSON.parse(s))






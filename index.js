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

// let z = new Date(2010, 0, 1,23,3,2)
// console.log(z) // 01.01.2010 23:03:02

// let x = 'hello'
// console.log(x)
// let d =new Date()
// console.log(d)
// console.log(d.getMonth(d.getMonth() + 2))


// let o = {a:2, b:7, f:[2,3,4], l:'jhello'}
// let s =JSON.stringify(o)

// console.log(s)
// console.log(JSON.parse(s))


// let euro = Intl.NumberFormat('es',{style:'currency', currency:'EUR'})
// console.log(euro.format(10)) // 10,00 €
// let pounds = Intl.NumberFormat('en',{style:'currency',currency:'GBP'})
// console.log(pounds.format(20)) // £20.00


// let data = [0.09, 9, 10, 0.8]
// let formatData = Intl.NumberFormat(undefined,{style:'percent', minimumFractionDigits:3,maximumSignificantDigits:2}).format
// console.log(data.map(formatData)) // [ "9%", "900%", "1,000%", "80%" ]

// let arabic =Intl.NumberFormat('ar',{useGrouping:false}).format
// console.log(arabic(123452)) // ١٢٣٤٥٢

// let hindi = Intl.NumberFormat('hi-IN-u-nu-deva').format
// console.log(hindi(1234)) // १,२३४

// let b =new Date()
// let opt = {weekday: 'long', month:'numeric', year:'numeric', day:'numeric'}

// console.log(Intl.DateTimeFormat('en-US', opt).format(d)) //Friday, 6/3/2022
// console.log(Intl.DateTimeFormat('en-u-ca-islamic',opt ).format(d)) // Friday, 11/4/1443 AH

let d =new Date()
let p ={weekday:'long', month : 'numeric', year:'numeric', day: 'numeric'}
console.log(Intl.DateTimeFormat('en-Us', p).format(d))

let euro = Intl.NumberFormat('en', {style:'currency',currency:'EUR'}).format(10)
console.log(euro) // €10.00

let pr = [21,23,3,2]
let forma = Intl.NumberFormat(undefined,{style:'percent', minimumFractionDigits:2, maximumFractionDigits:3}).format
console.log(pr.map(forma)) // [ "2,100.00%", "2,300.00%", "300.00%", "200.00%" ]

let b = Intl.NumberFormat('hi-IN-u-nu-deva').format
console.log(b(1234))

let x =new Set()
x.add(3).add(4).add(3)
console.log(x) // [3,4]

let y = new Map()
y.set(2,2)
console.log(y) // (2 -> 2)
y.set('one', 1)
console.log(y.get('one')) // 1


let url = new URL('https://www.instagram.com')
url.pathname='khumayun.kh'
console.log(url)
console.log(url.href)//https://www.instagram.com/khumayun.kh
url.searchParams.append('q', 'z')
url.searchParams.append('q', 'r')
console.log(url.href) //https://www.instagram.com/khumayun.kh?q=z&q=r
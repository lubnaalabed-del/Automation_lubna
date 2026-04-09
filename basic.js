//console.log("hello")
/*
let i = 0
while (i<10){
    i++
    console.log(i)
}
let count = 0;
for(let k=1; k <=10;k++){
    if(k%2 == 0 || k%5 == 0){
    console.log(k)
    count++
    if (count ==3)
        break
}}

let o =0
do{
    o++
}while(o<10);
console.log(o)

*/
//************************* */
//Aray

/*let max = marks[0]
for (let i =1;i<=5;i++) {
if (i > max)
max= i
}
console.log(max)
marks.push(11)
console.log(marks)
marks.pop()
console.log(marks)
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(3))
//check if a value included in the array?*/
/*console.log(marks.includes(120))
submarks = marks.slice(2,3,4)
console.log(submarks)*/
/*let marks = [1,2,3,4,5]
var sum = 0
for (let i =0; i< marks.length;i++){

    sum= sum + marks[i]
}
console.log(sum)*/
/*let marks = [1,2,3,4,5]
let total = marks.reduce((sum, mark)=>sum+mark,0)
console.log(total)

let even = marks.filter (score=>score % 2 ==0)
console.log(even)*/

let newA = [3,6,9]
let multiplyby3= newA.map(score=>score * 3)
console.log(multiplyby3)

let tottal = multiplyby3.reduce((sum, total)=>sum+total,0)
console.log(tottal)
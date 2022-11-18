const arr = [1,2]
let sum = 0

for (let i = 3; i < 34; i++) {
    arr.push(arr[i-1] = arr[i-3] + arr[i-2])
}   

const evenArr = arr.filter((num) => num%2 === 0);
const sumEven = evenArr.forEach((num) => {
    if(num < 4000000)
    sum += num
}) 

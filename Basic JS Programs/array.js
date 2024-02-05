array=[1,2,3,4,5,6,7,8,9,10,12,13,14,15]
// const evenNo=array.reduce((acc,cur)=>{
//     if (cur%2==0){
//         acc.push(cur)
//     }
//     return acc
// },[])



const arr=array.map(n=>{
    if (n % 2 === 0) {
        return n;
      }
})

// const evenNo=arr.filter(n=>n !== null)
// const evenNo=array.filter(n=>n%2=== 0)

console.log(arr)



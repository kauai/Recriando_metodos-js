let vetor = [0,5,30,2,55,10,8]
let min = null
let newvet = []
// console.log(vetor.length)

for(var i = 0; i <= 8;i++){
    console.log(i)
    min = Math.min(...vetor)  
    console.log(min)
    if(vetor.length){
      vetor.splice(vetor.indexOf(min),1)
      newvet[i] = min
    }
    // console.log(vetor)
}
console.log(newvet)


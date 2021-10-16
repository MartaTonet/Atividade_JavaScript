

let nome1 = prompt("Digite o seu nome!")
console.log(nome1)  


let idade1 = Number(prompt("Qual é  a sua idade?"))
console.log(idade1)


let nome2 = prompt("Digite o seu nome!")
console.log(nome2)

let idade2 = Number(prompt("Qual é  a sua idade?"))
console.log(idade2)


 if(idade1 > idade2) {
    console.log(nome1 + " tem mais idade que " + nome2)
}else if (idade1 < idade2) {
    console.log(nome2 + " tem mais idade que " + nome1)
    
}else{
        console.log(nome1 + " e " + nome2 + " têm a mesma idade. ")  
}  


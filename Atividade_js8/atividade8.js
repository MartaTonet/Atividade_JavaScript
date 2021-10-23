
function Pessoa(nome1, idade1, nome2, idade2){

    let n1= prompt("Digite o seu nome!"); 
    console.log(n1)
    let i1 = Number(prompt("Qual é  a sua idade?"));
    console.log(i1)
    let n2 = prompt("Digite o seu nome!");
    console.log(n2)
    let i2 = Number(prompt("Qual é  a sua idade?"));
    console.log(i2)
    let confirm = prompt("Você quer adicionar um outro registro(S/N")
    

    this.n1 = nome1;
    this.i1 = idade1;
    this.n2 = nome2;
    this.i2 = idade2;

   if (confirm ==="S") {
       return Pessoa()
   }
    
    if(i1 > i2) {
        console.log(`${n1} tem mais idade que ${n2} \n Sendo que ${n1} tem ${i1} e ${n2} tem ${i2} anos de idade  ` )

    }else if (i1 < i2) {        
        console.log(`${n2} tem mais idade que ${n1} \n Sendo que ${n2} tem ${i2} e ${n1} tem ${i1} anos de idade.  ` )
        
    }else{
        console.log(`${n1} e ${n2} têm a mesma idade. \n Visto que ${n1} tem ${i1} e ${n2} também tem  ${i2} anos de idade  ` ) 
    } 
    
   
}
Pessoa();

//O codigo a baixo vai executar a função dentro de uma variavel

// var cadastro = new Pessoa("Marta", 25, "Palmira", 25)
// console.log(`${cadastro.n1} tem a mesma idade que ${cadastro.n2}. Visto que ${cadastro.n1} tem ${cadastro.i1} e o ${cadastro.n2} também tem ${cadastro.i2} anos de idade`) 
 
 
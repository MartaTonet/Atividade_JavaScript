
var dadosDoProcesso = [{
    nome: "Antonica",
    sobreNome: "Alberto",
    idade: 63,
    altura: 1.50,
    nacionalidade: "Angola",
} ,
{
    nome: "Arleth",
    sobreNome: "Nandundu",
    idade: 45,
    altura: 1.65,
    nacionalidade: "Brasil",
},
{
    nome: "Rosa",
    sobreNome: "Fatima",
    idade: 25,
    altura: 1.70,
    nacionalidade: "Angola",
},
{
    nome: "Fernando",
    sobreNome: "Ribeiro",
    idade: 30,
    altura: 1.80,
    nacionalidade: "venezuela",
}]

//terminar esse codigo a baixo
 for(cadastro of dadosDoProcesso ){
     console.log(cadastro)
     if (cadastro.nacionalidade == "Angola") {
         cadastro.continente = "África"
     }else{
         cadastro.continente = "Ámerica do Sul"
         
     }
 } 

console.table(dadosDoProcesso);   





//pedir o preço do produrto
//(pedir para escolher entre alguns produtos cada um com o um preço)
//perguntar se o usuário deseja pagar a vista(1) ou parcelado
//se escolher pagar a vista , aplicar um desconto de 10%
//se escolher parcelae, perguntar em quantas vezes (até 6)
//aplicar um acrescimo de 1.5%X a quantidade de parcelas
//informar a forma de pagamento e o valor final 





let precoProduto = Number(prompt("Qual é o preço do produto?"))

alert("Preço original do produto: " + precoProduto)


let parcelas = Number(prompt("Em quantas vezes você deseja pagar? max 6"))
if (parcelas > 0 && parcelas < 7) {
    alert("Pagamento a vista")
    preçoProduto = precoProduto - precoProduto * 10/100
    alert("O preço final a ser pago será: " + precoProduto)
    
    
}else{
    arlet("pagamento em" + parcelas + "parcelas")
}
if (parcela == 1) {
    alert("pagamento a vista")
    
}else{
    
    alert("Valor inválido, precisa entre 1 e 6 parcelas")
}


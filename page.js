let nome = prompt("Digite o seu nome:")
let montante = prompt("Digite o valor o valor de emprestimo a contratar:")
let meses = prompt("Em quantos meses quer dividir?")

alert("Será aplicado um juros sobre o valor de cada parcela")

function calculoParcela(valor,qtd){
    let parcela = valor/qtd
    console.log("Sua parcela sem juros é:" + parcela)
    return parcela
}

function jurosEmprestimo (num,qtdMeses){
    let parcelaFinal = num

    if(qtdMeses < 12){
        parcelaFinal = num * 1.1
        console.log("a sua parcela final é " + parcelaFinal)
    } else {
        parcelaFinal = num * 1.25
        console.log("a sua parcela final é " + parcelaFinal)
    }

    return parcelaFinal
}

function valorTotal (val,meses){
    let montanteFinal = val * meses
    console.log("O valor total é: " + montanteFinal)
    return montanteFinal
}



let montanteComJuros = valorTotal(jurosEmprestimo(calculoParcela(montante,meses),meses),meses)
let parcelaComJuros = montanteComJuros / meses

alert(`O valor da parcela ficara em: ${parcelaComJuros} e o montante final é de: ${montanteComJuros}`)

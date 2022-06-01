function juros(capital,taxaDeJuros, tempoAplicação){
    let montante = capital*(1+taxaDeJuros)**tempoAplicação;
    return montante.toFixed(2);

}
console.log(juros(100.50, 0.03, 120))
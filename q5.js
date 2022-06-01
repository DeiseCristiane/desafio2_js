function saque(valor)
{
    let quantidadeNotasCem = 0;
    let quantidadeNotasCinquenta = 0;
    let quantidadeNotasVinte = 0;
    let quantidadeNotasDez = 0;
    let quantidadeNotasCinco = 0;
    let quantidadeNotasDois = 0;

    if(valor == 0) return {};
        
    if (valor >= 100){
        let divisao = valor/100;
        quantidadeNotasCem = Math.floor(divisao);
        valor -= quantidadeNotasCem*100;

    } 
    if(valor>= 50){
        let divisao = valor/50;
        quantidadeNotasCinquenta = Math.floor(divisao);
        valor -= quantidadeNotasCinquenta*50

    }
    if(valor >= 20){
        let divisao = valor/20;
        quantidadeNotasVinte = Math.floor(divisao);
        valor -= quantidadeNotasVinte*20;

    }
    if(valor>= 10){
        let divisao = valor/10;
        quantidadeNotasDez = Math.floor(divisao);
        valor -= quantidadeNotasDez*10;

    }
     if (valor >= 5){
        let divisao = valor/5;
        quantidadeNotasCinco = Math.floor(divisao);
        valor -= quantidadeNotasCinco*5;
    }
    if(valor >= 2){
        let divisao = valor/2;
        quantidadeNotasDois = Math.floor(divisao);
        valor -= quantidadeNotasDois*2;
    }
    if (valor !=0){
        return {};
    }
    return {'R$100':quantidadeNotasCem, 'R$50' :quantidadeNotasCinquenta, 'R$20' :quantidadeNotasVinte, 
    'R$10' :quantidadeNotasDez, 'R$5' :quantidadeNotasCinco, 'R$2' :quantidadeNotasDois};

}
console.log(saque(187))
  

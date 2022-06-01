function dinheiro(valorDecimal){
    let valorEmReais = valorDecimal;

    if(valorEmReais < 0){
        valorEmReais = valorEmReais * (-1);
        valorEmReais = valorEmReais.toFixed(2);
        let retorno1 = '-R$ ' + valorEmReais;
        retorno1 = retorno1.replace('.', ',');
        return retorno1;
    }else{
        valorEmReais = valorEmReais.toFixed(2);
        let retorno2 = 'R$ ' + valorEmReais;
        retorno2 = retorno2.replace('.', ',');
        return retorno2;
    };
    
    

}
console.log(dinheiro(0.30000000000000004));
console.log(dinheiro(-10.6051235689));

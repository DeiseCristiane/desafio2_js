
function palindromo(palavra){
   

    palavraReversa = palavra.split("").reverse().join("").toLowerCase();
    
    if(palavraReversa === palavra.toLowerCase()){
        let boolean = true;
        return {'palindromo': boolean, 'palavra': palavra};
        
    }else{
        let boolean = false;
        return {'palindromo': boolean, 'palavra': palavra};

    }
}
console.log(palindromo("Ana"))
console.log(palindromo("Paulo"))
console.log(palindromo("reviver"))
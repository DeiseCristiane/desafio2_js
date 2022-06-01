function triangulo(ladoA,ladoB,ladoC){
    if(ladoA+ladoB > ladoC && ladoA+ladoC > ladoB && ladoB + ladoC > ladoA){
        return true;
    }else{
        return false;
    }

}
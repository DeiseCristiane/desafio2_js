function bhaskara(ax2, bx, c) {

    const delta = Number(bx ** 2) - (4 * ax2 * c);

    if (delta > 0) {
        const res = [];
        valor1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
        res.push(valor1);
        valor2 = (-bx - Math.sqrt(delta))/( 2 * ax2);
        res.push(valor2);
        return res;
    }else if(delta == 0){
        const res2 = [];
        valor1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
        res2.push(valor1);
        return res2;
    }else{
        return "[]";
    }
    
}
console.log(bhaskara(4, -12, 9))
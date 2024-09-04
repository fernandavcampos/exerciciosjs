function proximoElementoA() {
    let sequencia = [1, 3, 5, 7];
    let proximo = sequencia[sequencia.length - 1] + 2; 
    return proximo;
}

console.log(proximoElementoA()); 


function proximoElementoB() {
    let sequencia = [2, 4, 8, 16, 32, 64];
    let proximo = sequencia[sequencia.length - 1] * 2; 
    return proximo;
}

console.log(proximoElementoB()); 

function proximoElementoC() {
    let sequencia = [0, 1, 4, 9, 16, 25, 36];
    let proximo = Math.pow(sequencia.length, 2);
    return proximo;
}

console.log(proximoElementoC()); 

function proximoElementoD() {
    let sequencia = [4, 16, 36, 64];
    let proximo = Math.pow((sequencia.length + 1) * 2, 2); 
    return proximo;
}

console.log(proximoElementoD()); 

function proximoElementoE() {
    let sequencia = [1, 1, 2, 3, 5, 8];
    let proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]; 
    return proximo;
}

console.log(proximoElementoE()); 

function proximoElementoF() {
    let sequencia = [2, 10, 12, 16, 17, 18, 19];
    let proximo = sequencia[sequencia.length - 1] + 1;
    return proximo;
}

console.log(proximoElementoF()); 





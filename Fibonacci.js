function fibonacciSequence(limit) {
    let fib = [0, 1];
    
   
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }

    return fib;
}

function isFibonacci(number) {
    const fib = fibonacciSequence(number);

    if (fib.includes(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}


const number = 5; 
isFibonacci(number);

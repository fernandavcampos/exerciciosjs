function verificarLetraA(string) {
   
    const lowercaseString = string.toLowerCase();
    
   
    let count = 0;
    for (let i = 0; i < lowercaseString.length; i++) {
        if (lowercaseString[i] === 'a') {
            count++;
        }
    }

  
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
        console.log(`A letra 'a' não foi encontrada na string.`);
    }
}


const string = "Vamos sair para ver o sol nascer"; 
verificarLetraA(string);

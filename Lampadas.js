function identificarLampadas() {
    // Estado das lâmpadas
    let lampada1 = false;  // Apagada e fria (associada ao terceiro interruptor)
    let lampada2 = false;  // Apagada e fria
    let lampada3 = false;  // Apagada e fria

    // 1º passo: Ligar o primeiro interruptor por um tempo e depois desligá-lo
    lampada1 = true;   // Primeiro interruptor liga a lâmpada 1
    let lampada1Quente = true;  // A lâmpada 1 fica quente
    lampada1 = false;  // Desligar a lâmpada 1

    // 2º passo: Ligar o segundo interruptor
    lampada2 = true;  // Segundo interruptor liga a lâmpada 2
    let lampada2Quente = true;  // A lâmpada 2 fica quente e acesa

    // 3º passo: Determinar qual interruptor controla qual lâmpada
    let resultado = {};

    // Lógica para determinar a lâmpada acesa
    if (lampada2) {
        resultado["Interruptor 2"] = "Lâmpada 2 (acendida)";
    }

    // Lógica para determinar a lâmpada quente, mas apagada
    if (!lampada1 && lampada1Quente) {
        resultado["Interruptor 1"] = "Lâmpada 1 (apagada, mas quente)";
    }

    // Lógica para determinar a lâmpada fria e apagada
    if (!lampada3 && !lampada2Quente) {
        resultado["Interruptor 3"] = "Lâmpada 3 (apagada e fria)";
    }

    return resultado;
}

console.log(identificarLampadas());

function contadorDeOcorrencia(palavra, letra) {
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
            if (letra == palavra.charAt(i)) {
                contador++;
            }
        }
    return contador;
    
}
module.exports = contadorDeOcorrencia;
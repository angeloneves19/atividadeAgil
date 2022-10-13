function numerosArmstrong(numero) {
    let numSaveArray = numero.toString().split('')
    let soma = 0
    for (i = 0; i < numSaveArray.length; i++) {
        let potencia = numSaveArray[i] ** numSaveArray.length
        soma += potencia

    }
    if (soma == numero) {
        return 'Este eh um numero de Armstrong!'
    } else {
        return 'Este nao eh um numero de Armstrong!'
    }


}
module.exports = numerosArmstrong;

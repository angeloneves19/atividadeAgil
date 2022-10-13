function criaObjeto(data) {
    const dataDigitada = data.split("/");
    const dataTrasformada = {
        dia: dataDigitada[0], mes: dataDigitada[1], ano: dataDigitada[2]
    }
    return(dataTrasformada);
}
module.exports = criaObjeto;
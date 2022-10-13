function apuraVotacao(votos) {
    let CountVencedor1 = 0
    let CountVencedor2 = 0 
    let CountVencedor3 = 0

    for (i = 0; i < votos.length; i++) {
        if (votos[i] == 1) {
            CountVencedor1++
        } else if(votos[i] == 2){
            CountVencedor2++
        } else{
            CountVencedor3++
        }
       
    }
    if (CountVencedor1 > CountVencedor2 && CountVencedor1 > CountVencedor3) {
        return "Vencedor: 1"
    }
    else if (CountVencedor2 > CountVencedor1 && CountVencedor2  > CountVencedor3) {
        return "Vencedor: 2"
    }
    else if(CountVencedor3 > CountVencedor1 && CountVencedor3 > CountVencedor2) {
        return "Vencedor: 3"
    }
    else {
        return "Empate"
    }
 }

module.exports = apuraVotacao;

const gerarNumeroRandow = (min =0, max = 10) => {
    let numeroRandow = Math.random(min, max) * (max - min) + min;
    
    console.log(numeroRandow.toFixed(0,0))
    
    let verificarNumero = numeroRandow.toFixed(0,0)

let tentativas = []

document.getElementById("comparar").onclick = function(){
const numeroTentando = document.getElementById("numero");
const perdeu = document.getElementById("resultado");   


        if(numeroTentando.value == verificarNumero) {
            alert("Parabens número certo")
            location.reload(true)
        }else if ((numeroTentando.value != verificarNumero)&&(tentativas.length < 3)) {
            tentativas.push(numeroTentando.value)
            numeroTentando.value = ""
        }else{
            alert(`Você perdeu o número era ${verificarNumero}`)
            location.reload(true)
        }
        
    }
}


  
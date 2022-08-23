var inpute = document.getElementById('chave')
var aImagem = document.getElementById('imagemInicial')
var lista = [8, 12, 15, 18]

function encontrar() {
    if (proNumero(inpute.value) && !praLista(inpute.value, lista)) {
        aImagem.src = './anoes.jpg'
        window.alert("Parabéns, você achou os sete.")
    }else{
        aImagem.src = './floresta.jpg'
        window.alert("Opsss, não foi dessa vez.")
    }
}



function proNumero(n) {
    if (Number(n) >=8 && Number(n) <=20) {
        return true
    }else{
        return false
    }
}


function praLista (n,a) {
    if (a.indexOf(Number(n))!= -1) {
        return true
    }else{
        return false
    }
}
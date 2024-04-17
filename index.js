const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const mainBtn = document.getElementById("mainBtn")
const passL = document.getElementById("pass1")
const passR = document.getElementById("pass2")



function gerarSenha(){
    let result = ""
    let tamanhoSenha = 15
    let char = characters

    for (let i = 0; i < tamanhoSenha; i++){
        let nAleatorio = Math.floor(Math.random() * char.length)
        result += char[nAleatorio]
    }
    return result
}

mainBtn.addEventListener('click', function(){
    passL.textContent = gerarSenha()
    passR.textContent = gerarSenha()
})
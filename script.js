
function mudaImagem(alo) {
    console.log(alo.src)

        if(alo.src == "https://raw.githubusercontent.com/Jefersongs9/P-gina-do-Flamengo/main/Imagens/estrela.png"){
            alo.src = "https://raw.githubusercontent.com/Jefersongs9/P-gina-do-Flamengo/main/Imagens/estreladourada.png"
        }else{
            alo.src = "https://raw.githubusercontent.com/Jefersongs9/P-gina-do-Flamengo/main/Imagens/estrela.png" 
        }
}
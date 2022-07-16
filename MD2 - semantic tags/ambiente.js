function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anodenascimento = document.querySelector('input#txtano')
    let res = document.getElementById('res')

    if (Number(anodenascimento.value) > anoAtual || Number(anodenascimento.value) == 0){
        alert('[ERRO] Informações inválidas, confira os dados e tente novamente!')
    } else{
        let sexo = document.getElementsByName('sexo')
        let idade = anoAtual - Number(anodenascimento.value)
        let gene = ''

        if (sexo[0].checked){
             gene = 'um Homem'
        }

        else if (sexo[1].checked){
             gene = 'uma Mulher'
        }
        
        res.innerHTML = `Identificamos ${gene} com ${idade} anos.`
    }

}
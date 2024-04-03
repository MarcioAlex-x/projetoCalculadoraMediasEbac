const form = document.getElementById('form')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji para aprovado" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji para reprovado" />'
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Informe a nota minima para calcular a média...'))
let linhas = ''
let atividades = []
let notas = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionaLinha()
    atulizaTabela()
    atualizarMediaFinal()
})

const adicionaLinha = () => {
    const inputNomeAtividade = document.getElementById('nomeAtividade')
    const inputNotaAtividade = document.getElementById('notaAtividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`Atividade ${inputNomeAtividade.value} já foi incluida!`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhas += linha
        console.log(atividades)
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''


}

const atulizaTabela = () => {
    const corpoTAbela = document.querySelector('tbody')
    corpoTAbela.innerHTML = linhas
}

const calcularMedia = () => {
    let somaNotas = 0
    for (i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    return somaNotas / notas.length

}

const atualizarMediaFinal = () => {
    const mediaFinal = calcularMedia()
    console.log(mediaFinal)

    document.getElementById('valorMediaFinal').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('resultadoMediaFinal').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}
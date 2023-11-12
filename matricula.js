var tdTotalCursos = document.getElementById('total-de-cursos')
var tdTotalDeHoras = document.getElementById('total-de-horas')

var totalHoras = 0
var totalCursos = 0


function adicionaCurso(checkbox) {
    console.log(checkbox);
    if (checkbox.checked) {
        totalCursos++
        totalHoras += parseInt(checkbox.value)
    }
    else {
        totalCursos--
        totalHoras -= parseInt(checkbox.value)
    }

    tdTotalDeHoras.textContent = totalHoras + 'h'
    tdTotalCursos.textContent = totalCursos + '	curso(s)'

}

function confirmaMatriculas() {
    if (totalCursos === 0) {
        alert('Nenhum curso selecionado')
    } else {
        alert('Matricula confirmada!')
        window.location.href = 'index.html'
    }
}

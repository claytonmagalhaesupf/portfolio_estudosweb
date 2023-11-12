//document.getElementById('divIMC').style.display = 'none';
//document.getElementById('divPorcento').style.display = 'none';
//document.getElementById('divBuscaCEP').style.display = 'none';
//document.getElementById('divColor').style.display = 'none';
//document.getElementById('divOrdenacao').style.display = 'none';
mudaServico();

//peso / (altura x altura).
function calculaIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let imc = peso / (altura * altura);
    imc = parseFloat(imc).toFixed(2);
    console.log(imc);
    if (isNaN(imc)) {
        document.getElementById('resultadoIMC').innerHTML = 'Não foi possivel calcular o IMC ';
    } else {
        document.getElementById('resultadoIMC').innerHTML = 'O índice é ' + imc + '%';
    }
}

function calculaPorcento() {
    let porcento = document.getElementById('porcento').value;
    let valorTotal = document.getElementById('valorTotal').value;
    let resultadoPorcento = (porcento * 100) / valorTotal;
    resultadoPorcento = parseFloat(resultadoPorcento).toFixed(1);
    console.log(resultadoPorcento);
    if (isNaN(resultadoPorcento)) {
        document.getElementById('resultadoPorCento').innerHTML = 'Não foi possivel calcular o IMC ';
    } else {
        document.getElementById('resultadoPorCento').innerHTML = 'O resultado é ' + resultadoPorcento + '%' + ' de ' + valorTotal;
    }
}

function mudaServico() {
    let servico = document.getElementById('selectServico').value;
    //console.log(servico);
    if (servico == 1) {
        document.getElementById('divIMC').style.display = 'block';
        document.getElementById('divPorcento').style.display = 'none';
        document.getElementById('divBuscaCEP').style.display = 'none';
        document.getElementById('divColor').style.display = 'none';
        document.getElementById('divOrdenacao').style.display = 'none';
    } else if (servico == 2) {
        document.getElementById('divPorcento').style.display = 'block';
        document.getElementById('divIMC').style.display = 'none';
        document.getElementById('divBuscaCEP').style.display = 'none';
        document.getElementById('divColor').style.display = 'none';
        document.getElementById('divOrdenacao').style.display = 'none';
    } else if (servico == 3) {
        document.getElementById('divPorcento').style.display = 'none';
        document.getElementById('divIMC').style.display = 'none';
        document.getElementById('divBuscaCEP').style.display = 'block';
        document.getElementById('divColor').style.display = 'none';
        document.getElementById('divOrdenacao').style.display = 'none';
    } else if (servico == 4) {
        document.getElementById('divPorcento').style.display = 'none';
        document.getElementById('divIMC').style.display = 'none';
        document.getElementById('divBuscaCEP').style.display = 'none';
        document.getElementById('divColor').style.display = 'block';
        document.getElementById('divOrdenacao').style.display = 'none';
    } else if (servico == 5) {
        document.getElementById('divPorcento').style.display = 'none';
        document.getElementById('divIMC').style.display = 'none';
        document.getElementById('divBuscaCEP').style.display = 'none';
        document.getElementById('divColor').style.display = 'none';
        document.getElementById('divOrdenacao').style.display = 'block';
    }
}

//https://brasilapi.com.br/
function buscaEnderecoCEP() {
    cep = document.getElementById('cep').value;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://brasilapi.com.br/api/cep/v1/' + cep, false); // false for synchronous request
    xmlHttp.send(null); //body is null
    //resultado em JSON
    resultado = xmlHttp.responseText;
    //converter para objeto
    res = JSON.parse(xmlHttp.responseText);

    console.log(res);
    console.log(res['city']);
    document.getElementById('resultadoCEP').innerHTML = res['cep'] + ', ' + res['city'] + ', ' + res['state'] + ', ' + res['neighborhood'] + ', ' + res['street'];


}
//https://stackoverflow.com/questions/247483/http-get-request-in-javascript

function mudaCor() {
    let cor = document.getElementById('selectColor').value;
    document.getElementById("divCentro").style.backgroundColor = cor;

}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function ordenar() {
    let arrayOfNumbers = document.getElementById('inputNumbers').value.split(",");
    let arrayOrder = arrayOfNumbers.sort();
    console.log(arrayOfNumbers);
    document.getElementById("resultadoOrdenado").innerHTML = arrayOrder.join(',');
}

//outros https://github.com/gabrieldarezzo/helpjs-ravi
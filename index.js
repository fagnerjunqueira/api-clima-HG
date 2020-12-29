var requestURL = 'https://api.hgbrasil.com/weather?format=json-cors&key=a1aaeac5&user_ip=remote'; //Faz requisição da URL da API

var request = new XMLHttpRequest();
request.open('GET', requestURL); //Get dos dados da API
request.responseType = 'json';
request.send(); //Envia resposta JSON

request.onload = function() { //Função executada ao carregar
    var clima = request.response; //Dados do clima em Json
    var resultados = clima.results //Resultados do clima em Json
    var semana = resultados.forecast //Resultados da semana em Json
    document.getElementById("cidade").innerText = resultados.city //Pega nome da cidade
    document.getElementById("descricao").innerText = resultados.description //Pega descrição do clima
    document.getElementById("data").innerText = resultados.date //Data da previsão
    document.getElementById("temperatura").innerText = resultados.temp + '° C' //temperatura no momento
    document.getElementById("humidity").innerText = 'Umidade: ' + resultados.humidity +'%' //Umidade no momento
    document.getElementById("wind_speedy").innerText = 'Velocidade do Vento: ' + resultados.wind_speedy //velocidade do vento
    document.getElementById("sunrise").innerText = 'Nascer do Sol: ' + resultados.sunrise //horario que o sol nasce
    document.getElementById("sunset").innerText = "Por do sol: " + resultados.sunset //horario em que o sol dorme

    var newRow = document.createElement('tr'); //cria tabela
        newRow.insertCell(0).innerHTML = 'Data';
        newRow.insertCell(1).innerHTML = 'Dia da semana';
        newRow.insertCell(2).innerHTML = 'Temp. Max';
        newRow.insertCell(3).innerHTML = 'Temp. Min';
        newRow.insertCell(4).innerHTML = 'Condição';
        document.getElementById('semana').appendChild(newRow); //insere a tabela na pagina html
    for(i=0; i < 6; i++){ //repeticao que extrai os dados da semana e coloca em uma table no html
        var newColum = document.createElement('tr');
        newColum.insertCell(0).innerHTML = semana[i].date
        newColum.insertCell(1).innerHTML = semana[i].weekday
        newColum.insertCell(2).innerHTML = semana[i].max + '° C'
        newColum.insertCell(3).innerHTML = semana[i].min + '° C'
        newColum.insertCell(4).innerHTML = semana[i].description
        document.getElementById('semana').appendChild(newColum)
    }
  }
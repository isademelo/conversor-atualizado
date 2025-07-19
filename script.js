//função de converter temperatura
function calcularTemperatura(){
    let resultado; //variável dos resultados
    let unidadeDe; //variável para armazenar a unidade escolhida pelo usuário "DE"
    let unidadePara; //variável para armazenar a unidade escolhida pelo usuário no campo "PARA"
    let alterarTexto = document.getElementById('resultado');
    let valorTemperatura = parseFloat((document.getElementById('valor').value)); //variável que armazena o valor inserido pelo usuário
    let de = document.getElementById('de').value; // variável que armazena a opção selecionada pelo usuário pelo seletor do campo "DE:"
    let para = document.getElementById('para').value; // variável que armazena a opção selecionada pelo usuário pelo seletor do campo "PARA:"

    //verificação de qual unidade de temperatura foi escolhida no campo "DE"
    if (de === "celsius"){ 
        unidadeDe = '°C';
    } else if (de === "kelvin") {
        unidadeDe = 'K';
    } else if(de === "fahrenheit") {
        unidadeDe ='°F';
    }
    //verificação de qual unidade de temperatura foi escolhida no campo "PARA"
    if (para === "celsius"){ 
        unidadePara = '°C';
    } else if (para === "kelvin") {
        unidadePara = 'K';
    } else if(para === "fahrenheit") {
        unidadePara = '°F'
    }
    //verificação se o campo de inserção do valor está vazio e se existe algum valor inválido.
    if (isNaN(valorTemperatura)){
        alert("Por favor, insira um valor numérico válido para a temperatura.");
        alterarTexto.innerHTML = "Escolha a escala e insira o valor manualmente."
        return;
    }
    //verificação de qual calculo vai ser realizado.
    if (de === para){
        resultado = valorTemperatura;
        alterarTexto.innerHTML = `Você selecionou a mesma unidade para conversão. O valor permanece o mesmo: ${valorTemperatura}${unidadePara}.`;

    } else if (de === "celsius" && para === "fahrenheit"){
        resultado = parseFloat((valorTemperatura * 9/5) + 32).toFixed(2); 
    } else if (de === "celsius" && para === "kelvin"){
        resultado = parseFloat(valorTemperatura + 273.15).toFixed(2);
    } else if (de === "fahrenheit" && para === "celsius"){
        resultado = parseFloat((valorTemperatura - 32) * 5/9).toFixed(2);
    } else if (de === "fahrenheit" && para === "kelvin"){
        resultado = parseFloat((valorTemperatura - 32)* 5/9 + 273.15).toFixed(2);
    } else if (de === "kelvin" && para === "celsius"){
        resultado = parseFloat(valorTemperatura - 273.15).toFixed(2);
    } else if (de === "kelvin" && para === "fahrenheit"){
        resultado = ((valorTemperatura - 273.15) * 9/5 + 32).toFixed(2);
    }
    //verificação se não foi escolhido 2 escalas iguais e modifica o parágrafo mostrando o resultado e as conversões.
    if (de != para){
        alterarTexto.innerHTML = `Conversão de ${valorTemperatura} ${unidadeDe} em ${unidadePara} é  ${resultado}${unidadePara}`;
    } 
    //limpa o campo de valor após a conversão
    document.getElementById('valor').value = "";
}

function calcularDistancia(){
    let resultado; //variável dos resultados
    let unidadeDe; //variável para armazenar a unidade escolhida pelo usuário "DE"
    let unidadePara; //variável para armazenar a unidade escolhida pelo usuário no campo "PARA"
    let alterarTexto = document.getElementById('resultado');
    let valorDistancia = parseFloat(document.getElementById('valor').value); //variável para receber valor da distância
    let de = document.getElementById('de').value; // variável para receber a opção escolhida pelo usuário no campo "DE:"
    let para = document.getElementById('para').value; //variável para receber a opção escolhida pelo usuário no campo "PARA:"
    
    //verificação de qual unidade o usuário escolheu no campo "DE:"
    if ( de === "metro"){
            unidadeDe = "m"
    } else if ( de === "quilometro"){
            unidadeDe = "km"
    } else if ( de === "milha"){
            unidadeDe = "mi"
    }
    //verificação de qual unidade o usuário escolheu no campo "PARA:"
    if ( para === "metro"){
            unidadePara = "m"
    } else if (para === "quilometro"){
            unidadePara = "km"
    } else if (para === "milha"){
            unidadePara = "mi"
    }

    // verificação se o usuário digitou um valor inválido ou deixou o campo em branco
    if (isNaN(valorDistancia)){
        alert("Por favor, insira um valor numérico válido para a distância.");
        alterarTexto.innerHTML = "Escolha a escala e insira o valor manualmente.";
        return;
    }

    // verificação e execução do calculo de conversão baseado na escolha do usuário 
    if ( de === para ){
        resultado = valorDistancia; 
        alterarTexto.innerHTML=`Você selecionou a mesma unidade para conversão. O valor permanece o mesmo: ${valorDistancia}${unidadePara}.`; 
    } else if (de === "milha" && para === "quilometro"){
        resultado = (valorDistancia * 1.60964).toFixed(2);
    } else if (de === "quilometro" && para === "milha"){
        resultado = (valorDistancia * 0.621371).toFixed(2);
    } else if (de === "milha" && para === "metro"){
        resultado = (valorDistancia * 1609.34).toFixed(2);
    } else if (de === "metro" && para === "milha"){
        resultado = (valorDistancia * 0.000621371).toFixed(2);
    } else if (de === "quilometro" && para === "metro"){
        resultado = (valorDistancia * 1000).toFixed(2);
    } else if (de === "metro" && para === "quilometro"){
        resultado = (valorDistancia / 1000).toFixed(2);
    }
    // verificação se o valor do campo"DE:" é diferente do campo "PARA:" e printa o valor da conversão.
    if (de != para){
        alterarTexto.innerHTML = `Conversão de ${valorDistancia} ${unidadeDe} em ${unidadePara} é  ${resultado}${unidadePara}`;
    }
    // apaga o campo de valor após conversão
    document.getElementById('valor').value = "";
}

function calcularConversaoDinheiro(){
    let resultado; //variável dos resultados
    let alterarTexto = document.getElementById('resultado');
    let simboloDe, simboloPara;
    let valorDinheiro = parseFloat(document.getElementById('valor').value); 
    let de = document.getElementById('de').value;
    let para = document.getElementById('para').value;

    if (de === 'real'){
        simboloDe = 'R$';
    } else if (de === 'dolar'){
        simboloDe = 'US$'
    } else if (de === 'euro'){
        simboloDe = '€'
    }

    if (para === 'real'){
        simboloPara = 'R$';
    } else if (para === 'dolar'){
        simboloPara = 'US$'
    } else if (para === 'euro'){
        simboloPara = '€'
    }

    if (isNaN(valorDinheiro)){
        alert("Por favor, insira um valor numérico válido.");
        alterarTexto.innerHTML = "Escolha a escala e insira o valor manualmente.";
        return;
    }

    if (de === para){
        resultado = valorDinheiro; 
        alterarTexto.innerHTML=`Você selecionou a mesma unidade para conversão. O valor permanece o mesmo: ${valorDinheiro}${simboloDe}.`;
    } else if (de === "real" && para === "dolar"){
        resultado = parseFloat(valorDinheiro / 5.58).toFixed(2);
    } else if (de === "real" && para === "euro"){
        resultado = parseFloat(valorDinheiro / 6.49).toFixed(2);
    } else if (de === "dolar" && para === "real"){
        resultado = parseFloat(valorDinheiro * 5.58).toFixed(2);
    } else if (de === "dolar" && para === "euro"){
        resultado = parseFloat(valorDinheiro/1.16).toFixed(2);
    } else if (de === "euro" && para === "dolar"){
        resultado = parseFloat(valorDinheiro * 1.16).toFixed(2);
    } else if (de === "euro"&& para === "real"){
        resultado = parseFloat(valorDinheiro * 6.49).toFixed(2);
    }

    if (de != para){
        alterarTexto.innerHTML = `Conversão de ${valorDinheiro} ${simboloDe} em ${simboloPara} é  ${resultado}${simboloPara}`;
    }

    document.getElementById('valor').value = "";
}
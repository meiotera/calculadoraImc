
function documento() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let condResult = null;
    const imc = []; 
    
    function recebeEventoForm(evento) {
        // previnir envio do formulario
        evento.preventDefault();
        // console.log('ok')

        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        let peso = document.getElementById('peso').value;
        let altura = document.getElementById('altura').value;     

        imc.push ({
            nome,
            sobrenome,
            altura,
            peso
        });
        console.log(imc);     
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        function imcCalculo(peso, altura) {
            return peso / (altura * altura);
        }
        const imcResult = imcCalculo(peso, altura);    
        
        console.log(isNaN(imcResult))
        console.log(!isNaN(imcResult))
        function condicoesImc(){

            if (isNaN(imcResult) === true || !isNaN(imcResult) === false) {
                condResult = `Digite peso e altura validos`;       
                resultado.style.backgroundColor = '#633397'         
            } else if (imcResult < 18.5) {
                condResult = 'Você está abaixo do peso';
                resultado.style.backgroundColor = '#DBD579';
            } else if (imcResult >= 18.5 && imcResult <= 24.9) {
                condResult = 'Você está com peso normal';
                resultado.style.backgroundColor = 'green';
            } else if (imcResult >= 25 && imcResult <= 29.90) {
                condResult = 'Você está com sobrepeso'
                resultado.style.backgroundColor = 'yellow'
            } else if (imcResult >= 30 && imcResult <= 34.90) {
                condResult = 'Você está com Obesidade grau 1'
                resultado.style.backgroundColor = '#F68F12'
            } else if (imcResult >= 35 && imcResult <= 39.90) {
                condResult = 'Você está com Obesidade grau 2';
                resultado.style.backgroundColor = 'red';
            } else {
                condResult = 'Você está com Obesidade grau 3';
                resultado.style.backgroundColor = 'red';
            }
        }
        
        condicoesImc();
        console.log(condResult)       
        
        if(isNaN(imcResult) === true || !isNaN(imcResult) === false){
            resultado.innerHTML = `${condResult}`;
        } else {
            resultado.innerHTML = `<p>${nome} seu IMC é ${imcResult.toFixed(2)} ${condResult}</p>`;
        }       
    }         
    form.addEventListener('submit', recebeEventoForm);
}
documento();








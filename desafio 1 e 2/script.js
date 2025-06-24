const clearButton = document.getElementById('clear');
const data1Input = document.getElementById('data1');
const data2Input = document.getElementById('data2');
const calendario = document.querySelectorAll('.calendar td');
const diasEntreDisplay = document.getElementById('diasEntre');


function clearHighlights() {
  calendario.forEach(cell => cell.style.backgroundColor = '');
}

function highlightDates() {
  clearHighlights(); 
  
  // Cria um objeto Date a partir do valor do input de data1, adicionando 'T00:00:00' para garantir que a hora seja definida como meia-noite.
  const data1 = new Date(data1Input.value + 'T00:00:00'); 
  const data2 = new Date(data2Input.value + 'T00:00:00');
  const dia1 = data1.getDate();
  const dia2 = data2.getDate();

  // Calcular os dias entre as datas
  const DiferencaTempo = Math.abs(data2 - data1); //Math.abs() = usado para garantir que o valor seja positivo
  
  // Math.ceil = arredondar para cima, garantindo que o número de dias seja inteiro.
  const diasEntre = Math.ceil(DiferencaTempo / (1000 * 60 * 60 * 24)); //Converte a diferença de tempo de milissegundos para dias: 1000 milissegundos por segundo. 60 segundos por minuto. 60 minutos por hora. 24 horas por dia.
  
  diasEntreDisplay.textContent = `Dias entre as datas: ${diasEntre}`;
  
  calendario.forEach(cell => {
    const cellDay = parseInt(cell.textContent); // Obtém o número do dia (texto dentro da célula) e o converte para um número inteiro usando parseInt.
    
    if (cellDay === dia1 || cellDay === dia2) { // Verifica se o dia da célula é igual ao dia da primeira ou segunda data selecionada.
      cell.style.backgroundColor = '#A6BC09';
      
    } else if (cellDay > dia1 && cellDay < dia2) { // Verifica se o dia da célula está entre os dias selecionados.
      cell.style.backgroundColor = '#019587';
    }
  });
}

clearButton.addEventListener('click', clearHighlights); 

data1Input.addEventListener('change', highlightDates); // Adiciona um ouvinte de evento para o input de data1, que chama a função highlightDates quando a data é alterada.

data2Input.addEventListener('change', highlightDates);

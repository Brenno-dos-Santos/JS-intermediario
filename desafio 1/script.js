const data1Input = document.getElementById('data1');
const data2Input = document.getElementById('data2');
const calendario = document.querySelectorAll('.calendar td');

function clearHighlights() {
    calendario.forEach(cell => cell.style.backgroundColor = '');
}

function highlightDates() {
    clearHighlights(); 

    const day1 = new Date(data1Input.value + 'T00:00:00').getDate(); 
    const day2 = new Date(data2Input.value + 'T00:00:00').getDate(); 

    calendario.forEach(cell => {
        if (cell.textContent == day1) {
            cell.style.backgroundColor = 'grey';
        }
        if (cell.textContent == day2) {
            cell.style.backgroundColor = '#b3aa01';
        }
    });
}

data1Input.addEventListener('change', highlightDates);
data2Input.addEventListener('change', highlightDates);
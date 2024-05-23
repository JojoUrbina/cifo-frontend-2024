const apiUrl = 'https://open.er-api.com/v6/latest/EUR';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayExchangeRates(data.rates);
    })
    .catch(error => {
        console.error('Error fetching exchange rates:', error);
    });

function displayExchangeRates(rates) {
    const resultContainer = document.getElementById('result-container');

    const currencies = ['USD', 'EUR', 'GBP',"ARS","CLP"]; // Monedas para las que se mostrará la equivalencia
    const monto = 1
    currencies.forEach(currency => {
        const rate = rates[currency];
        const resultText = `${monto} EUR = ${(rate*monto)} ${currency}`;
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');
        resultElement.textContent = resultText;
        resultContainer.appendChild(resultElement);
    });
}

document.getElementById('fetch-challenge').addEventListener('click', fetchChallenge);

function fetchChallenge() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('challenge-title').innerText = 'Reto Diario:';
            document.getElementById('challenge-description').innerText = data.en;
        })
        .catch(error => {
            document.getElementById('challenge-title').innerText = 'Error:';
            document.getElementById('challenge-description').innerText = 'No se pudo obtener el reto diario.';
            console.error('Error fetching challenge:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const countriesList = document.getElementById('countries-list');

    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCountries(data);
        })
        .catch(error => {
            console.error('Error fetching countries data:', error);
        });

    function displayCountries(countries) {
        countries.forEach(country => {
            const countryName = country.name.common;
            const listItem = document.createElement('li');
            listItem.textContent = countryName;
            countriesList.appendChild(listItem);
        });
    }
});

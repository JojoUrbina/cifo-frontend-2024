document.addEventListener('DOMContentLoaded', () => {
    const countriesInfoContainer = document.getElementById('countries-info');
    const countryCodes = ['FR', 'ES', 'US', 'GB', 'AR'];

    countryCodes.forEach(code => {
        fetchCountryData(code);
    });

    function fetchCountryData(countryCode) {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(response => response.json())
            .then(countryData => {
                const country = countryData[0];
                displayCountryInfo(country);
            })
            .catch(error => console.error('Error fetching country data:', error));
    }

    function displayCountryInfo(country) {
        const countryName = country.name.common;
        const flagUrl = country.flags.png;
        const languages = Object.values(country.languages).join(', ');
        const currencyCode = Object.keys(country.currencies)[0];

        const countryElement = document.createElement('div');
        countryElement.classList.add('country-info');

        countryElement.innerHTML = `
            <h2>${countryName}</h2>
            <img src="${flagUrl}" alt="Bandera de ${countryName}">
            <p><strong>Lenguaje:</strong> ${languages}</p>
            <p><strong>Moneda:</strong> ${currencyCode}</p>
        `;

        countriesInfoContainer.appendChild(countryElement);
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const countrySelect = document.getElementById('country-select');
  const amountInput = document.getElementById('amount-input');
  const countryInfo = document.getElementById('country-info');
  const restCountriesAPI = 'https://restcountries.com/v3.1/name/';
  const exchangeRateAPI = 'https://api.exchangerate-api.com/v4/latest/EUR'; // Using EUR as base currency

  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      const countries = data.slice(0, 100); // Limiting to 100 countries for selection
      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name.common;
        option.text = country.name.common;
        countrySelect.appendChild(option);
      });
    });

  countrySelect.addEventListener('change', function () {
    const selectedCountryName = countrySelect.value;
    if (selectedCountryName) {
      fetchCountryData(selectedCountryName);
    }
  });

  function fetchCountryData(countryName) {
    fetch(`${restCountriesAPI}${encodeURIComponent(countryName)}`)
      .then(response => response.json())
      .then(data => {
        const country = data[0];
        displayCountryData(country);
      });

    fetch(restCountriesAPI)
      .then(response => response.json())
      .then(data => {
        const countries = data.slice(0, 10); // Limiting to 10 countries for display
        displayOtherCountriesData(countries);
      });

    fetch(exchangeRateAPI)
      .then(response => response.json())
      .then(data => {
        const amount = parseFloat(amountInput.value) || 1;
        displayExchangeRates(data.rates, amount);
      });
  }

  function displayCountryData(country) {
    countryInfo.innerHTML = '';
    const countryRow = document.createElement('tr');
    countryRow.innerHTML = `
      <td>${country.name.common}</td>
      <td>${Object.values(country.languages).join(', ')}</td>
      <td>${Object.values(country.currencies).map(curr => curr.name).join(', ')}</td>
      <td><img src="${country.flags.png}" alt="${country.name.common} Flag" width="50"></td>
      <td id="converted-amount">-</td>
    `;
    countryInfo.appendChild(countryRow);
  }

  function displayOtherCountriesData(countries) {
    const otherCountriesTable = document.getElementById('other-countries');
    otherCountriesTable.innerHTML = '';
    countries.forEach(country => {
      const countryRow = document.createElement('tr');
      countryRow.innerHTML = `
        <td>${country.name.common}</td>
        <td>${Object.values(country.languages).join(', ')}</td>
        <td>${Object.values(country.currencies).map(curr => curr.name).join(', ')}</td>
        <td><img src="${country.flags.png}" alt="${country.name.common} Flag" width="50"></td>
      `;
      otherCountriesTable.appendChild(countryRow);
    });
  }

  function displayExchangeRates(rates, amount) {
    const convertedAmountCell = document.getElementById('converted-amount');
    if (convertedAmountCell) {
      convertedAmountCell.textContent = `${(rates.USD * amount).toFixed(2)} USD, ${(rates.GBP * amount).toFixed(2)} GBP`;
    }
  }
});

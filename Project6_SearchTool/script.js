const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

let cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities = data);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function findMatches(wordSearch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordSearch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matches = findMatches(this.value, cities);
  const html = matches.map(match => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = match.city.replace(regex, `<span class="highlight">${this.value}</span>`);
    const stateName = match.state.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <li>
        <span class="city-name">${cityName}, ${stateName}</span>
        <span class="city-population">${numberWithCommas(match.population)}</span>
      </li>
      `;
  }).join('');
  suggestions.innerHTML = html;
  console.log(html);
}

searchInput.addEventListener('keyup', displayMatches);

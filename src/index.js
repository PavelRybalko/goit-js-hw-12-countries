import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
var debounce = require('lodash.debounce');
import countriesListTemplate from './templates/countries-item-list.hbs';
import countryItemTemplate from './templates/country-item.hbs';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import './sass/styles.scss';

export const createListMarkup = data => {
  const markup = countriesListTemplate(data);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
};

export const createCountryMarkup = data => {
  const markup = countryItemTemplate(data);
  refs.countriesContainerRef.insertAdjacentHTML('beforeend', markup);
};

const fetchCountriesWithDebounce = debounce(() => {
  fetchCountries(refs.inputRef.value);
}, 500);
refs.inputRef.addEventListener('input', fetchCountriesWithDebounce);

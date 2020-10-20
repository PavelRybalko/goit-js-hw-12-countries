import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// var debounce = require('lodash.debounce');
import * as debounce from 'lodash.debounce';
import './sass/styles.scss';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';

const fetchCountriesWithDebounce = debounce(() => {
  fetchCountries(refs.inputRef.value.trim());
}, 500);
refs.inputRef.addEventListener('input', (event) => {
  if(event.data === " ")return;
  fetchCountriesWithDebounce()
});

refs.countriesContainerRef.addEventListener('click', event => {
  if (event.target.nodeName !== 'LI') return;
  fetchCountries(event.target.textContent);
});

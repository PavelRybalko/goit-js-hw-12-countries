import refs from './refs';
import { alert, notice, info, success, error } from '@pnotify/core';
import { createListMarkup, createCountryMarkup } from '../index';

export default function fetchCountries(value) {
  refs.countriesContainerRef.innerHTML = '';
  const url = `https://restcountries.eu/rest/v2/name/${value}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        error('Сделайте более специфичный запрос');
      } else if (data.length === 1) {
        createCountryMarkup(data);
      } else if (data.length > 1 && data.length <= 10) {
        createListMarkup(data);
      }
    })
    .catch(error => console.log(error));
}

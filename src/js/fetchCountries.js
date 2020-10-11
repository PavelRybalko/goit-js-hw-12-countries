import refs from './refs';
import countriesListTemplate from '../templates/countries-item-list.hbs';
import countryItemTemplate from '../templates/country-item.hbs';
import createMarkups from './createMarkups';
import { alert, notice, info, success, error } from '@pnotify/core';


export default function fetchCountries(searchQuery) {
  
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery.trim()}`;
  if(!searchQuery) return;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        error('Сделайте более специфичный запрос!');
      } else if (data.length === 1) {
        success('Страна найдена');
        createMarkups(data, countryItemTemplate);
        refs.inputRef.value = "";
      } else if (data.length > 1 && data.length <= 10) {
        createMarkups(data, countriesListTemplate);
      }
    })
    .catch(error => console.log(error));
}

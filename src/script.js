import * as wanakana from 'wanakana';

window.onload = () => {
  let inputRomaji = document.getElementById('romaji');
  wanakana.bind(inputRomaji);
}

import './../styles/style.scss';
import './icons';
import imgUrl from './../images/favicon.svg';

document.querySelector('#app').innerHTML = `
  <h1 class="mb-10 text-6xl">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <img src="${imgUrl}" alt="vite logo">
`;

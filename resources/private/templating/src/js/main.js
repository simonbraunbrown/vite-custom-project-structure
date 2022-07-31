import 'uno.css';
import '../styles/style.css';
import imgUrl from '../images/favicon.svg';

document.querySelector('#app').innerHTML = `
  <h1 class="mb-10 text-6xl">Hello Vite!</h1>
  <a class="link" href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <img src="${imgUrl}" alt="vite logo">
`;

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('change', () => {
	if (themeToggle.checked) {
		document.querySelector('html').setAttribute('data-theme', 'candystoredark');
	} else {
		document.querySelector('html').setAttribute('data-theme', 'candystore');
	}
});

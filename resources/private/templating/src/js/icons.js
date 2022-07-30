import { LitElement, html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import battery from '~icons/mdi/battery';
import arrowUp from '~icons/bi/arrow-up';
import iconify from '~icons/my-custom-icons/iconify';

const icons = {
	battery,
	arrowUp,
	iconify,
};

export default class Icon extends LitElement {
	static properties = {
		iconName: {},
	};

	connectedCallback() {
		super.connectedCallback();
		this.classList.add('icon', `icon-${this.iconName}`);
		this.setAttribute('title', `${this.iconName}`);
	}

	render() {
		return html`${unsafeSVG(icons[this.iconName])}`;
	}
}

customElements.define('my-icon', Icon);

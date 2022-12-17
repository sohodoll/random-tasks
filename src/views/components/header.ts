import Component from '../templates/components';
import { PageIds } from '../../app';

const Buttons = [
    {
        id: PageIds.MainPage,
        text: 'Main Page',
    },
    {
        id: PageIds.SettingsPage,
        text: 'Settings Page',
    },
    {
        id: PageIds.StatsPage,
        text: 'Stats Page',
    },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            pageButtons.appendChild(buttonHTML);
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.appendChild(buttonHTML);
        });
        this.container.appendChild(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;

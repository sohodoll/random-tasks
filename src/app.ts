import MainPage from './views/main';
import SettingsPage from './views/settings';

class App {
    private container: HTMLElement;
    private initialPage: SettingsPage;

    constructor() {
        this.container = document.body;
        this.initialPage = new SettingsPage('settings-page');
    }

    run() {
        const mainPageHTML = this.initialPage.render();
        this.container.appendChild(mainPageHTML);
    }
}

export default App;

import Header from './views/components/header';
import MainPage from './views/main';
import SettingsPage from './views/settings';
import StatsPage from './views/stats';
import Page from './views/templates/page';

export const enum PageIds {
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatsPage = 'stats-page',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private initialPage: MainPage;
    private header: Header;

    static renderNewPage(pageId: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove;
        }
        let page: Page | null = null;
        if (pageId === PageIds.MainPage) {
            page = new MainPage(pageId);
        } else if (pageId === PageIds.SettingsPage) {
            page = new SettingsPage(pageId);
        } else if (pageId === PageIds.StatsPage) {
            page = new StatsPage(pageId);
        }
        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.appendChild(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.initialPage = new MainPage('main-page');
        this.header = new Header('header', 'header');
    }

    run() {
        App.container.appendChild(this.header.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
    }
}

export default App;

import Page from './templates/page';

class SettingsPage extends Page {
    static TextObject = {
        MainTitle: 'Settings Page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
        this.container.appendChild(title);
        return this.container;
    }
}

export default SettingsPage;

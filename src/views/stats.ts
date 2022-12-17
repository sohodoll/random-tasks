import Page from './templates/page';

class StatsPage extends Page {
    static TextObject = {
        MainTitle: 'Stats Page',
    };

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(StatsPage.TextObject.MainTitle);
        this.container.appendChild(title);
        return this.container;
    }
}

export default StatsPage;

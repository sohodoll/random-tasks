import Page from './templates/page';

export const enum ErrorTypes {
    Error_404 = 404,
}

class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    static TextObject: { [prop: string]: string } = {
        404: 'The page was not found',
    };

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    }

    render() {
        const title = this.createHeaderTitle(
            ErrorPage.TextObject[this.errorType]
        );
        this.container.appendChild(title);
        return this.container;
    }
}

export default ErrorPage;

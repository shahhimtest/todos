export class Todo {
    completed: boolean;
    editing: boolean;

    private _title: string;
    get title() {
        return this._title;
    }
    set title(value: string) {
        this._title = value.trim();
    }

    constructor(title: string, completed?: boolean) {
        this.editing = false;
        this.completed = completed || false;
        this.title = title.trim();
    }
}

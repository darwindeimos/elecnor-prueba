export class Todo {
    userId: number = null;
    id: number = null;
    title: string = null;
    completed: boolean = null;

    constructor(init?: Partial<Todo>) {
        Object.assign(this, init);
    }
}

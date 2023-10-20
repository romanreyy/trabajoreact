export class PostDomain {

    constructor(title) {
        let min = 1;
        let max = 2000;

        this.id = Math.floor(Math.random() * (max - min + 1)) + min
        this.title=title;
    }
}

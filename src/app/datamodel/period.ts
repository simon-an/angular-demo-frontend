import { Input } from '@angular/core';
export class Period {
    public from: Date;
    public to: Date;

    constructor(f: Date, t: Date) {
        this.from = f;
        this.to = t;
    }
}

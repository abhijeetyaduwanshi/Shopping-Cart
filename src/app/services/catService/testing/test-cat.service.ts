import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { asyncData } from './../../../../async-observable-helpers';

export { Cat } from './../cat';
export { CatService } from './../cat.service';
export { getTestCats } from './test-cats';

import { Cat } from './../cat';
import { CatService } from './../cat.service';
import { getTestCats } from './test-cats';

@Injectable()

export class TestCatService extends CatService {

    constructor() {
        super(null);
    }

    cats = getTestCats();
    lastResult: Observable<any>;

    getCats(): Observable<Cat[]> {
        return this.lastResult = asyncData(this.cats);
    }
}

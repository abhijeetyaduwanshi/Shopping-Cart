import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { asyncData } from './../../../../async-observable-helpers';

export { Navigation } from './../navigation';
export { NavigationService } from './../navigation.service';
export { getTestNavigation } from './test-navigation';

import { Navigation } from './../navigation';
import { NavigationService } from './../navigation.service';
import { getTestNavigation } from './test-navigation';

@Injectable()

export class TestNavigationService extends NavigationService {

    constructor() {
        super(null);
    }

    navigation = getTestNavigation();
    lastResult: Observable<any>;

    getNavigation(): Observable<Navigation[]> {
        return this.lastResult = asyncData(this.navigation);
    }
}

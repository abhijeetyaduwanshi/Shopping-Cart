import { Component, OnInit } from '@angular/core';

import { Navigation } from './../../services/navigationService/navigation';
import { NavigationService } from './../../services/navigationService/navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    navigationData: any = [];

    constructor(private navigationApi: NavigationService) { }

    ngOnInit() {
        this.getNavigation();
    }

    private getNavigation = () => {
        this.navigationApi.getNavigation().subscribe(data => {
            this.navigationData = data;
        })
    }
}

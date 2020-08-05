import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigationService } from './../../services/navigationService/navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

    @Output() private sidenavToggle = new EventEmitter();

    private navigationData: any = [];

    constructor(private navigationApi: NavigationService) { }

    ngOnInit() {
        this.getNavigation();
    }

    private getNavigation = () => {
        this.navigationApi.getNavigation().subscribe(data => {
            this.navigationData = data;
        })
    }

    private onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }
}

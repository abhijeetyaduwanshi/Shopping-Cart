import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigationService } from './../../services/navigationService/navigation.service';

@Component({
    selector: 'app-side-navigation',
    templateUrl: './side-navigation.component.html',
    styleUrls: ['./side-navigation.component.css']
})

export class SideNavigationComponent implements OnInit {

    @Output() private sidenavClose = new EventEmitter();

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

    private onSidenavClose = () => {
        this.sidenavClose.emit();
    }
}

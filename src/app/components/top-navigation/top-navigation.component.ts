import { Component, OnInit } from '@angular/core';
import { Navigation } from './../../shared/navigation';
import { NavigationService } from './../../shared/navigation.service';

@Component({
    selector: 'app-top-navigation',
    templateUrl: './top-navigation.component.html',
    styleUrls: ['./top-navigation.component.css']
})

export class TopNavigationComponent implements OnInit {
    NavigationData: any = [];

    constructor(private navigationApi: NavigationService) {
        this.navigationApi.GetNavigation().subscribe(data => {
            this.NavigationData = data;
        })
    }

    ngOnInit() { }
}

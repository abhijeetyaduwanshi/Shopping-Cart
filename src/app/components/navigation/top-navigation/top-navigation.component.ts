import { Component, OnInit } from '@angular/core';

import { NavigationService } from './../../../services/navigationService/navigation.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})

export class TopNavigationComponent implements OnInit {
  navigationData: any = [];

  constructor(private navigationApi: NavigationService) { }

  ngOnInit(): void {
    this.getNavigation();
  }

  /**
   * GET navigation
   */
  getNavigation = () => {
    this.navigationApi.getNavigation().subscribe(data => {
      this.navigationData = data;
    })
  }
}

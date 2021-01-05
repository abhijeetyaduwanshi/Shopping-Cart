import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../services/categoryService/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {
  categoryData: any = [];

  constructor(private categoryApi: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  /**
   * GET all categories
   */
  getCategories = () => {
    this.categoryApi.getCategories().subscribe(data => {
      this.categoryData = data;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from "../model/category.interface";
import {FetchService} from "../fetch.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.fetchService.getCategories().then(categories => {
      this.categories = categories;
    })
  }

}

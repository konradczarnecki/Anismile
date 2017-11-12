import { Component, OnInit } from '@angular/core';
import { Animal } from "../model/animal.interface";
import {FetchService} from "../fetch.service";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  animals: Animal[];

  stickCategories: boolean;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {

    this.stickCategories = false;

    window.addEventListener('scroll', () => {

      if(window.scrollY >= 190){

        if(this.stickCategories == false){

          // let el: HTMLElement = document.getElementById('categories');
          // let rect = el.getBoundingClientRect();
          // el.style.top = rect.top + 'px';
          // el.style.left = rect.left + 'px';
          this.stickCategories = true;
        }


      } else this.stickCategories = false;
    });

    this.fetchService.getAllAnimals(0).then(animals => {
      let ext: Animal[] = [];
      for(let i = 0; i < 15; i++) animals.forEach(animal => ext.push(animal))

      this.animals = ext;
    })
  }

}

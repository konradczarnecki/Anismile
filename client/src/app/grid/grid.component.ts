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

  constructor(private fetchService: FetchService) { }

  ngOnInit() {

    this.fetchService.getAllAnimals(0).then(animals => {
      let ext: Animal[] = [];
      for(let i = 0; i < 15; i++) animals.forEach(animal => ext.push(animal))

      this.animals = ext;
    })
  }

}

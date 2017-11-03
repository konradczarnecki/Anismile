import {Component, Input, OnInit} from '@angular/core';
import {Animal} from "../model/animal.interface";
import {ActivatedRoute} from "@angular/router";
import {FetchService} from "../fetch.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  animal: Animal;

  constructor(private route: ActivatedRoute, private fetchService: FetchService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.fetchService.getAnimal(params.id).then(animal => this.animal = animal);
    })
  }

}

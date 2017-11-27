import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Animal} from "../model/animal.interface";
import {ActivatedRoute} from "@angular/router";
import {FetchService} from "../fetch.service";
import {windowWhen} from "rxjs/operator/windowWhen";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  animal: Animal;

  photoVisible: boolean;

  constructor(private route: ActivatedRoute,
              private fetchService: FetchService,
              private changeDet: ChangeDetectorRef) { }

  ngOnInit() {

    this.photoVisible = false;

    this.route.params.subscribe(params => {

      this.fetchService.getAnimal(params.id).then(animal => this.animal = animal);
    })
  }

  ngAfterViewInit() {
  }

  showPhoto(){

    this.photoVisible = true;

    this.changeDet.detectChanges();

    const image: HTMLImageElement = <HTMLImageElement> document.getElementById('fullImage');

    if(image.clientWidth > image.clientHeight){

      image.width = innerWidth * 0.5;
      image.height = image.height * (innerWidth * 0.5 / image.width);

    } else {

      image.height = innerHeight * 0.7;
      image.width = image.width * (innerHeight * 0.7 / image.height);

    }
  }

}


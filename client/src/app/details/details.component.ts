import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Animal} from "../model/animal.interface";
import {ActivatedRoute} from "@angular/router";
import {FetchService} from "../fetch.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {

  animal: Animal;

  @ViewChild('image') image: ElementRef;
  @ViewChild('frame') frame: ElementRef;

  constructor(private route: ActivatedRoute, private fetchService: FetchService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.fetchService.getAnimal(params.id).then(animal => this.animal = animal);
    })
  }

  ngAfterViewInit() {
    this.positionImage();
  }

  positionImage(){

    let img = this.image.nativeElement;
    let smaller = img.width < img.height ? 'Width' : 'Height';
    let higher = smaller === 'Width' ? 'Height' : 'Width';

    let frameDimensions = {
      forSmaller : this.frame.nativeElement['offset' + smaller],
      forHigher : this.frame.nativeElement['offset' + higher]
    };

    img[smaller.toLowerCase()] = frameDimensions.forSmaller;

    let offset = (img[higher.toLowerCase()] / 2 - frameDimensions.forHigher / 2);
    console.log(offset);

    img.style.transform = `translate(-${offset}px, 0)`
  }
}


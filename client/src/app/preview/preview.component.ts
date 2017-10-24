import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  imageSrc: string;
  name: string;
  price: string;

  constructor() {
    this.imageSrc = 'https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg';
    this.name = 'Horse';
    this.price = '1000';
  }

  ngOnInit() {
  }

}

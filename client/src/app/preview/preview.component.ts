import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() price: string;
  imageSrc: string

  constructor() {}

  ngOnInit() {
    this.imageSrc = environment.apiurl + '/images/animal?id=' + this.id;
  }

}

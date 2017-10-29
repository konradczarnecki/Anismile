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
  @Input() imageSrc: string

  constructor() {}

  ngOnInit() {
  }

}

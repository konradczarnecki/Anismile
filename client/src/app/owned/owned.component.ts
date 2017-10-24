import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owned',
  templateUrl: './owned.component.html',
  styleUrls: ['./owned.component.scss']
})
export class OwnedComponent implements OnInit {

  test: number[];

  constructor() {
    this.test = [];
    for(let i = 0; i < 30; i++){
      this.test.push(i);
    }
  }

  ngOnInit() {
  }

}

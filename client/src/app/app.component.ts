import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  stick: boolean;
  shadowOp: number;

  ngOnInit(){

    this.shadowOp = 0;
    this.stick = false;

    window.addEventListener('scroll', () => {

      this.shadowOp = 0.5 * (window.scrollY - 70) / 190;
      if(this.shadowOp > 0.5) this.shadowOp = 0.5;
      else if(this.shadowOp < 0) this.shadowOp = 0;

      this.stick = window.scrollY >= 190
    });
  }
}

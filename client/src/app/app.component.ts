import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  stick: boolean;

  ngOnInit(){

    this.stick = false;
    window.addEventListener('scroll', () => this.stick = window.scrollY >= 190);
  }
}

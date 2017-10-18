import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as anime from 'animejs';

import { FadeDirective } from "../fade.directive";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @ViewChild('bannerBack') bannerBack: ElementRef;
  @ViewChild('bannerFront') bannerFront: ElementRef;

  highlightColor = 'rgba(149, 112, 160, 0.1)';
  bannerPosition: {x: number, y: number};
  bannerImage: [number, number];

  bannerLinks: string[] = [
    "http://awallpapersimages.com/wp-content/uploads/2016/07/Jungle-Pictures-HD-Wallpapers.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a4/White-tiger-2407799_1280.jpg",
    "http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg",
    "https://a-z-animals.com/media/animals/images/470x370/zebra_8.jpg",
    "http://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg"
  ];

  idx: number;

  constructor() { }

  ngOnInit() {

    this.bannerPosition = { x : 0, y : 0 };
    this.bannerImage = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)];
    this.idx = 0;
    this.moveBanner();
  }

  moveBanner(): void {

    let duration = 5000;

    anime({
      targets : this.bannerPosition,
      x : -160,
      y : -100,
      duration : duration,
      easing : 'linear',
      complete : () => {
        this.bannerPosition = { x : 0, y : 0 };
        this.bannerImage[this.idx] = Math.floor(Math.random() * 5);
        this.idx = (this.idx + 1) % 2;
        this.moveBanner();
      }
    });

    let currentOp = +getComputedStyle(this.bannerFront.nativeElement).opacity;
    let targetOp = currentOp == 0 ? 0.8 : 0;

    anime({
      targets : this.bannerFront.nativeElement,
      opacity : targetOp,
      duration : 2000,
      delay : duration - 2000,
      easing : 'linear'
    })

    anime({
      targets : this.bannerBack.nativeElement,
      opacity : currentOp,
      duration : 2000,
      delay : duration - 2000,
      easing : 'linear'
    })

  }

}

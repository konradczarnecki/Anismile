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

  bannerLinks: string[] = [
    "http://awallpapersimages.com/wp-content/uploads/2016/07/Jungle-Pictures-HD-Wallpapers.jpg",
    "http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg",
    "http://news.nationalgeographic.com/content/dam/news/2016/02/24/01highanimals.jpg",
    "https://www.cambridgema.gov/~/media/Images/sharedphotos/departmentphotos/animal.jpg",
    "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4n/b0/p04nb0mq.jpg",
  ];

  idx: number;
  duration = 5000;
  transitionTime = 2000;
  frontLayerActive: boolean;
  inter: number;

  constructor() { }

  ngOnInit() {

    this.idx = 1;
    this.bannerFront.nativeElement.src = this.bannerLinks[0];
    this.bannerBack.nativeElement.src = this.bannerLinks[1];
    this.frontLayerActive = true;
    this.animate();
    this.inter = setInterval(this.changeImage.bind(this), 9000);
  }

  animate() {

    anime({
      targets : [this.bannerFront.nativeElement, this.bannerBack.nativeElement],
      translateX : [0, -650],
      translateY : [0, -250],
      duration : 49000,
      easing : 'linear',
      complete : () => {

        let target = this.frontLayerActive ? this.bannerFront.nativeElement : this.bannerBack.nativeElement;
        clearInterval(this.inter);

        anime({
          targets : target,
          opacity : 0,
          duration : 3000,
          easing : 'linear',
          complete : () => {
            setTimeout(this.changeImage.bind(this), 2000);
            setTimeout(this.animate.bind(this), 2000);
            this.inter = setInterval(this.changeImage.bind(this), 9000);
          }
        })
      }
    })
  }

  changeImage() {

    let frontOp = this.frontLayerActive ? 0 : 0.8;
    let backOp = !this.frontLayerActive ? 0 : 0.8;

    anime({
      targets : this.bannerFront.nativeElement,
      opacity : frontOp,
      duration : 3000,
      easing : 'linear',
      complete : () => {
        let img = ++this.idx % 5;
        if(frontOp == 0){
          this.bannerFront.nativeElement.src = this.bannerLinks[img]
        } else {
          this.bannerBack.nativeElement.src = this.bannerLinks[img]
        }
      }
    });

    anime({
      targets : this.bannerBack.nativeElement,
      opacity : backOp,
      duration : 3000,
      easing : 'linear'
    });

    this.frontLayerActive = !this.frontLayerActive;
  }


}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as anime from 'animejs';

import { FadeHighlightDirective } from "../fade.directive";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @ViewChild('bannerBack') bannerBack: ElementRef;
  @ViewChild('bannerFront') bannerFront: ElementRef;

  highlightColor = 'rgba(149, 112, 160, 0.1)';

  duration = 50000;
  transitionTime = 2000;
  frontLayerActive: boolean;
  changeImgInterId: number;

  constructor() { }

  ngOnInit() {

    let url = environment.apiurl + "/images/banner?ran=";
    this.bannerFront.nativeElement.src = url + Date.now();
    this.bannerBack.nativeElement.src = url + Date.now() + 1;

    this.frontLayerActive = true;
    this.changeImgInterId = setInterval(this.changeImage.bind(this), 9000);
    this.animate();
  }

  animate() {

    anime({
      targets : [this.bannerFront.nativeElement, this.bannerBack.nativeElement],
      translateX : [0, -950],
      translateY : [0, -450],
      duration : this.duration,
      easing : 'linear',
      complete : () => {

        let target = this.frontLayerActive ? this.bannerFront.nativeElement : this.bannerBack.nativeElement;
        clearInterval(this.changeImgInterId);

        anime({
          targets : target,
          opacity : 0,
          duration : this.transitionTime,
          easing : 'linear',
          complete : () => {
            setTimeout(this.changeImage.bind(this), this.transitionTime);
            setTimeout(this.animate.bind(this), this.transitionTime);
            this.changeImgInterId = setInterval(this.changeImage.bind(this), 9000);
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
      duration : this.transitionTime,
      easing : 'linear',
      complete : () => {

        let layerToChange = !this.frontLayerActive ? this.bannerFront : this.bannerBack;
        let timestamp = Date.now();

        layerToChange.nativeElement.src = environment.apiurl + "/images/banner?ran=" + timestamp;
      }
    });

    anime({
      targets : this.bannerBack.nativeElement,
      opacity : backOp,
      duration : this.transitionTime,
      easing : 'linear'
    });

    this.frontLayerActive = !this.frontLayerActive;
  }
}

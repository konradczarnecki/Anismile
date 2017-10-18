import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import * as anime from 'animejs';

@Directive({
  selector: '[fade]'
})
export class FadeDirective {

  @Input() fade: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') highlight(){
    this.animate(this.fade)
  }

  @HostListener('mouseleave') unhighlight(){
    this.animate('rgba(255,255,255,0.1)');
  }

  private animate(to: string): void {

    anime({
      targets: this.el.nativeElement,
      backgroundColor: to,
      duration: 300,
      easing: 'linear'
    })
  }
}

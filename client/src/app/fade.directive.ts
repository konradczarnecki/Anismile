import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import * as anime from 'animejs';

@Directive({
  selector: '[fade]'
})
export class FadeHighlightDirective {

  @Input() fade: string;

  onElement: boolean;
  entered: number;
  targetColor: string;
  duration: number;

  constructor(private el: ElementRef) {
    this.onElement = false;
    this.duration = 300;
  }

  @HostListener('mouseenter') highlight(){

    this.onElement = true;

    setTimeout(() => {

      if(this.onElement == true){
        this.entered = Date.now();
        this.targetColor = this.fade;
        this.animate();
      }
    }, 25)
  }

  @HostListener('mouseleave') unhighlight(){

    this.onElement = false;
    this.targetColor = 'rgba(255,255,255,0.1)';

    let timeout = Date.now() - this.entered;
    setTimeout(this.animate.bind(this), this.duration - timeout);
  }

  private animate(): void {

    anime({
      targets: this.el.nativeElement,
      backgroundColor: this.targetColor,
      duration: this.duration,
      easing: 'linear'
    })
  }
}

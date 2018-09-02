import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-store-animation',
  template: `
    <div class="services">
      <div class="store"></div>
      <div class="dispatcher"></div>
    </div>
    
    <div class="state-changes-wrapper">
      <ngrx-circles class="state-changes" color="primary"></ngrx-circles>
    </div>
    <div class="actions-wrapper">
      <ngrx-circles class="actions" color="accent"></ngrx-circles>
    </div>
  `,
  styleUrls: ['./store-animation.component.scss'],
})
export class StoreAnimationComponent {}

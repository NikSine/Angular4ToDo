// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';
export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('.4s', style({ opacity: 1 }))
        ]),
    ]);
export const taskFadeInOutAnimation =
  trigger('taskFadeInOutAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.4s', style({ opacity: 1 }))
      ]),
    transition(':leave', [
        animate('.2s', style({ opacity: 0 }))
      ]),
  ]);

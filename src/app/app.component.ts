import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
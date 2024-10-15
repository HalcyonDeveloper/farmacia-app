
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/recepe">Recepe</a></li>
        <li><a routerLink="/products">Products</a></li>
        <li><a routerLink="/movements">Products Movements</a></li>
        <li><a routerLink="/deliver">Deliver</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav ul {
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      display: inline;
      margin-right: 10px;
    }
  `]
})
export class NavComponent {}
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  template: `
    <header class="w-full py-4">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-x-5">
          <a class="text-xl" routerLink="/">NG-Commerce</a>
          <a
            routerLink="/"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-300 hover:text-gray-100 hover:underline transition-all"
            >All</a
          >
          <a
            routerLink="/men-clothing"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-300 hover:text-gray-100 hover:underline transition-all"
            >Men</a
          >
          <a
            routerLink="/women-clothing"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-300 hover:text-gray-100 hover:underline transition-all"
            >Women</a
          >
          <a
            routerLink="/jewelry"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-300 hover:text-gray-100 hover:underline transition-all"
            >Jewelry</a
          >
          <a
            routerLink="/electronics"
            routerLinkActive="active-link"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-300 hover:text-gray-100 hover:underline transition-all"
            >Electronics</a
          >
        </div>
        <a routerLink="/shopping-cart">
          <button class="btn btn-lg">
            <fa-icon [icon]="faCartShopping"></fa-icon>
          </button>
        </a>
      </div>
    </header>
  `,
  styleUrl: './header.style.css',
})
export class HeaderComponent {
  faCartShopping = faCartShopping;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-store',
  imports: [CommonModule],
  templateUrl: './my-store.component.html',
  styleUrl: './my-store.component.scss',
})
export class MyStoreComponent {
  productArray = [
    {
      id: 1,
      label: 'Product 1',
      price: 909,
      imgUrl: 'https://shorturl.at/NoY1R',
    },
    {
      id: 2,
      label: 'Product 2',
      price: 299,
      imgUrl: 'https://shorturl.at/NoY1R',
    },
    {
      id: 3,
      label: 'Product 3',
      price: 199,
      imgUrl: 'https://shorturl.at/NoY1R',
    },
  ];
}

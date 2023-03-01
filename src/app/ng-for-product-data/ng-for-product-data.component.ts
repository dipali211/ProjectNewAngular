import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-product-data',
  templateUrl: './ng-for-product-data.component.html',
  styleUrls: ['./ng-for-product-data.component.css']
})
export class NgForProductDataComponent implements OnInit {
  products = [
    {
      name: 'iPhone 12',
      description: 'The latest iPhone with a sleek design and powerful features.',
      price: 999,
      image: 'https://th.bing.com/th/id/OIP.EKFOY5TsqR8teutQfio0fAHaE8?w=273&h=182&c=7&r=0&o=5&pid=1.7',
      isOutOfStock: false
    },
    {
      name: 'AirPods Pro',
      description: 'Wireless earbuds with active noise cancellation and immersive sound.',
      price: 249,
      image: 'https://th.bing.com/th/id/OIP.pnfG7YuJhZRAOlG7YX4UGQHaEG?w=335&h=186&c=7&r=0&o=5&pid=1.7',
      isOutOfStock: true
    },
    {
      name: 'MacBook Pro',
      description: 'A powerful laptop for creative professionals and tech enthusiasts.',
      price: 1499,
      image: 'https://images.idgesg.net/images/article/2018/07/dsc01444-2-100764610-large.3x2.jpg',
      isOutOfStock: false
    }
  ];

  addToCart(product) {
    if (!product.isOutOfStock) {
      console.log(`${product.name} added to cart!`);
    } else {
      console.log(`${product.name} is out of stock.`);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

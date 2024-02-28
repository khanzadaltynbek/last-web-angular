import { Component } from '@angular/core';
import { Product, products } from '../products';
import { Category } from '../category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(product: Product) {
    const message = 'check out ${product.name} at ${product.link}';
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      product.link
    )}&text=${encodeURIComponent(message)}`;
    window.location.href = telegramUrl;
  }
}

// product-list.component.ts
export class ProductListComponent {
  categories: Category[] = [];

  constructor() {
    this.categories = this.createCategories();
  }

  createCategories(): Category[] {
    // Implement logic to categorize products
    // You can create 4 categories and assign products to each category
    // For simplicity, let's assume each category contains all products for now
    return [
      { id: 1, name: 'Category 1', products: [...products] },
      { id: 2, name: 'Category 2', products: [...products] },
      { id: 3, name: 'Category 3', products: [...products] },
      { id: 4, name: 'Category 4', products: [...products] },
    ];
  }

  removeProduct(category: Category, product: Product): void {
    category.products = category.products.filter((p) => p !== product);
  }

  increaseLikes(product: Product): void {
    product.likes++;
  }
}

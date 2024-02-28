import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();

  removeProduct(): void {
    this.remove.emit(this.product);
  }

  increaseLikes(): void {
    this.like.emit(this.product);
  }
}

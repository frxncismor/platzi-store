import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/product.model';
import { ProductsService } from '../../../../modules/core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('Product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().
    subscribe(products => {
      this.products = products;
    });
  }

}

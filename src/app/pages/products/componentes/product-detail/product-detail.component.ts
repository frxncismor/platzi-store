
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../../../../product.model';
import { ProductsService } from '../../../../modules/core/service/products/products.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).
    subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: IProduct = {
      id: '222',
      title: 'Mouse RGB',
      image: 'https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/3004606.jpg',
      price: 1000,
      description: 'Un mouse bonito'
    };

    this.productsService.createProduct(newProduct).
    subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<IProduct> = {
      price: 1050,
      description: 'Un mouse con colores'
    };

    this.productsService.updateProduct( '222' , updateProduct).
    subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222').
    subscribe(rta => {
      console.log(rta);
    });
  }
}

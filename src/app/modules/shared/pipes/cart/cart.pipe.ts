import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../../../product.model';
import { CartService } from 'src/app/modules/core/service/cart/cart.service';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {

  transform(productSelected: any, products: any[]): any {
    return products.filter((product) => productSelected.id === product.id).length;
  }
}

import { Injectable } from '@angular/core';
import { IProduct } from '../../../../product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  /**
   * Lista todos los productos de nuestra API
   */
  getAllProducts() {
    return this.http.get<IProduct[]>(`${environment.url_api}/products/`);
  }

  /**
   * Busca un producto por su id
   * @param id  Identificador del producto a buscar
   */
  getProduct(id: string) {
    return this.http.get<IProduct>(`${environment.url_api}/products/${id}`);
  }

  /**
   * Crea un nuevo producto
   * @param product Producto a ser creado, debe contener las caracteristicas de tipo producto
   */
  createProduct(product: IProduct) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  /**
   * Actualiza un producto
   * @param id Producto a actualizarse
   * @param changes Los datos que se van a actualizar del producto
   */
  updateProduct(id: string, changes: Partial<IProduct>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  /**
   * Elimina un producto
   * @param id Producto a eliminar
   */
  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}

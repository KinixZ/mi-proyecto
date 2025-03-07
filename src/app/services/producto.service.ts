import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }


private productos: Producto[] = [
  new Producto(1, 'Laptop', 'Laptop mamalona', 1200, 'assets/lap.jpg',1),
  new Producto(2, 'Celular', 'celular mamalon', 800, 'assets/cel.jpg',1),
  new Producto(3, 'Tablet', 'Tablet mamalona', 600, 'assets/tablet.jpg',1),
];

obtenerProductos(): Producto[]{
  return this.productos;
}
}



import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Producto}from '../../models/Producto';
import {ProductoService} from '../../services/producto.service';
import {Router} from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private router: Router
) { }
  ngOnInit():void{
   this.productos = this.productoService.obtenerProductos();
  }
  AgregarAlCarrito(prodcuto:any){
this.carritoService.agregarProducto(prodcuto);
  }
  irAlCarrito(){
    this.router.navigate(['/carrito']);
  }
}
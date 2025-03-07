import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  xml: string = '';
  private carrito: Producto[] = [];
  agregarProducto(producto: Producto) {
    this.carrito.push(producto);
  }
  obtenerCarrito(): Producto[] {
    return this.carrito;
    
  }
  generarXML(): void {
    let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n<factura>\n`;
    xmlContent += `  <info>\n`;
    xmlContent += `    <folio>123</folio>\n`; // Example folio
    xmlContent += `    <fecha>${new Date().toISOString().split('T')[0]}</fecha>\n`; // Current date
    xmlContent += `    <cliente>\n`;
    xmlContent += `      <nombre>juan</nombre>\n`; // Example client name
    xmlContent += `      <email>juan@gmail.com</email>\n`; // Example client email
    xmlContent += `    </cliente>\n`;
    xmlContent += `  </info>\n`;

    xmlContent += `  <productos>\n`;
    this.carrito.forEach((producto) => {
      xmlContent += `    <producto>\n`;
      xmlContent += `      <id>${producto.id}</id>\n`;
      xmlContent += `      <descripcion>${producto.descripcion}</descripcion>\n`;
      xmlContent += `      <cantidad>${producto.cantidad}</cantidad>\n`;
      xmlContent += `      <precioUnitario>${producto.precio}</precioUnitario>\n`;
      xmlContent += `      <Subtotal>${producto.precio * producto.cantidad}</Subtotal>\n`;
      xmlContent += `    </producto>\n`;
    });
    xmlContent += `  </productos>\n`;

    const subtotal = this.carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
    const iva = subtotal * 0.16; // Example IVA calculation (16%)
    const total = subtotal + iva;

    xmlContent += `  <totales>\n`;
    xmlContent += `    <subtotal>${subtotal}</subtotal>\n`;
    xmlContent += `    <impuestos>\n`;
    xmlContent += `      <iva>${iva}</iva>\n`;
    xmlContent += `    </impuestos>\n`;
    xmlContent += `    <total>${total}</total>\n`;
    xmlContent += `  </totales>\n`;
    xmlContent += `</factura>`;

    this.xml = xmlContent;
  }
}


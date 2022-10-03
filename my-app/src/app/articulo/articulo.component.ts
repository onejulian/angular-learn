import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>()

  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulos.push( 
      {
        nombre: 'Televisor de 24 pulgadas', 
        description: 'Marca Dell con 4 años de garantía', 
        precio: 1100000,
        stock: 10,
        precioMayorista: 1000000
      },
      {
        nombre: 'Laptop I5', 
        description: 'Laptop nueva con 8gb de ram', 
        precio: 1500000,
        stock: 10,
        precioMayorista: 1400000
      },
      {
        nombre: 'Monitor', 
        description: 'curvo con pantalla FHD', 
        precio: 800000,
        stock: 10,
        precioMayorista: 700000
      },
       )
  }

  pasarParametro(articuloRecibido: Articulo)
  {
    this.ruta.navigate(['articuloDetalle', {articulo: JSON.stringify(articuloRecibido)}])
  }

}

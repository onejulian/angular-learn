import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVence:Date;
  esImportante:boolean;
  textoGrande:boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  mostrarCuadrado: boolean = false;

  pestana: string = ''

  cargando: boolean = true

  nombres: Array<string> = ["María", "Ana", "Juan", "Pedro"]

  productos: Array<Producto> = [
    {
      nombre : 'arroz',
      stock : 20,
      fabricante : 'Roa',
      fechaVence : new Date('11/11/2032'),
      esImportante: true,
      textoGrande: false
    },
    {
      nombre : 'trigo',
      stock : 80,
      fabricante : 'Haz de oro',
      fechaVence : new Date('12/1/2032'),
      esImportante: false,
      textoGrande: true
    },
    {
      nombre : 'avena',
      stock : 40,
      fabricante : 'Quacker',
      fechaVence : new Date('03/12/2032'),
      esImportante: true,
      textoGrande: true
    },
    {
      nombre : 'cebada',
      stock : 25,
      fabricante : 'Polar',
      fechaVence : new Date('04/13/2032'),
      esImportante: false,
      textoGrande: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false
    }, 3000);
  }

  alternar(){
    this.cargando = !this.cargando
  }

  cambiarPestana(pestana: string)
  {
    this.pestana = pestana;
  }

  alternarFondo()
  {
    this.mostrarCuadrado = !this.mostrarCuadrado
  }

}

import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  nombre: string = "María"
  apellido: string = "Pérez"
  alumno: any = {
    nombre: 'Julián',
    apellido: 'Correa',
    edad: 19
  }
  imagen: string = 'https://www.semana.com/resizer/XHB_E9ycFfFYEUPQ89Ew7HXZivU=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/ZSEURPWPXRFMLOYCUOWA3Y2BBE.jpg'
  inputNuevo: string = 'Hola soy un input'
  correo: string = 'julian@mail.co'
  contrasenia: string = '123'
  constructor() { }

  ngOnInit(): void {
  }

  ingresar(evento: any) {
    if (evento.key == "Enter") {
      console.log("Ingresando al sistema")
    }
  }

  llamarAlert() {
    alert('Ha hecho doble click')
  }

  escribirModelo() {
    console.log(this.contrasenia)
  }
  escribirCorreo() {
    console.log(this.correo)
  }
  escribir(evento: any) {
    console.log(evento.target.value)
  }

  colorearFondo(evento: any) {
    evento.srcElement.style.background = 'red'
  }

  cambiarTamanio(evento: any) {
    evento.srcElement.style.width = '500px'
    evento.srcElement.style.height = '200px'
  }
  incrementarTamanio(evento: any) {
    evento.srcElement.style.width = '900px'
    evento.srcElement.style.height = '450px'
  }

}

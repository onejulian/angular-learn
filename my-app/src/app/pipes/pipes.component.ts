import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  titulo: string = 'Hola soy un título'
  dinero: number = 2400
  ganacias: number = 0.54
  fechaNacimiento: Date = new Date('09-22-2002')
  textoLargo: string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sunt quasi animi id soluta laboriosam nobis totam magni nostrum suscipit pariatur harum natus officia explicabo, autem atque accusantium corrupti dignissimos.'

  constructor() { }

  ngOnInit(): void {
  }

}

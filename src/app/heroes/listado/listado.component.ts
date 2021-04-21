import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  heroes: string[]=['Spiderman','Iron man', 'hulk', 'thor'];
  heroeBorrado: string = '';

  //METODO QUE DEFINIMOS para que nos muestre
  //las variables borradas

  borrar(){
    this.heroeBorrado = this.heroes.shift() || '';
  }




/********************************************************* */
  constructor() {
 console.log('constructor');
    
   }


  ngOnInit(): void {
    console.log('ngOnInit');
  }

}

import { Injectable } from '@angular/core';
import { personaje } from '../inferfaces/dbz.interface';
@Injectable()
export class DBZservice{
  private _personajes : personaje[] =[
    {
      nombre: 'Goku',
      poder: 8000
    },
    {
      nombre: 'Vegueta',
      poder: 15000
    }
  ]

  get personajes():personaje[]{
    return[...this._personajes];
  }
 

  constructor(){
    console.log("servicio inicializado")
  }
}


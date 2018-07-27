import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InAndOutDishesService {

  constructor(private myhttp: Http) { }
  
  getDishes(){
    return this.myhttp.get('http://localhost:3000/api/dishes')
    .map((getDishResponse) => getDishResponse.json());
  }

}


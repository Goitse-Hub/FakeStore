import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//for pipe
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any) => {
      return res;
    }))
  }

  
}

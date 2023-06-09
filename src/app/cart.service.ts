import { Injectable } from '@angular/core';
import { Console } from 'console';
import { BehaviorSubject } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Create A Property
  public cartItem: any = []
  //BehaviorSubject can Imit And Parse Value / It Can Act As A Subcribe/ Observable
  //Need To Initialize Product Array
  public productList = new BehaviorSubject<any>([])

  //This behaviorSubject will help us send our data from searchbar to our productlist
  //to enable filtering 
  public search = new BehaviorSubject<string>("")

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  //Set Product is Optional
  setProduct(product: any){
    this.cartItem.push(...product);
    this.productList.next(product);
  }

  addToCart(product : any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.getTotalAmount();
  }

  getTotalAmount() : number{
    let subTotal = 0;
    this.cartItem.map((x: any) =>{
      subTotal += x.total;
    })
    return subTotal
  }

  deleteCartProduct(product:any){
    const index: number  = this.cartItem.indexOf(product);
    if(index !== -1)
    {
      this.cartItem.splice(index, 1);
      this.productList.next(this.cartItem)
    }
    // this.cartItem.map((x:any, index:any) =>{

    //   if(product.id === x.id){
    //     this.cartItem.splice(index, 1);
    //     console.log(x)
    //   }
    // })
    // this.productList.next(this.cartItem)
  }


  deleteAllCart(){
    this.cartItem = []
    this.productList.next(this.cartItem);

  }


}

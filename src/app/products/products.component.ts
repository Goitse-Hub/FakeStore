import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';
import { Product } from '../products';
import { ApidataService } from '../apidata.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent  {

  products = PRODUCTS;

  selectedProduct?: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  productsize:number=1;

  //Start Of Api Services

  //for services
  //created property to store all the data
  public productList : any;

  //inject Apidata service 
  //Also inject cart services
  constructor(private api: ApidataService, private cartService: CartService ){

  }

  // make a call
  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.productList = res;

      // To Use Quantity And Total
      this.productList.forEach((x:any) => {
        Object.assign(x,{quantity:1,total:x.price})
      });
    })
  }

  //End Of Api Services

  //Start Of Cart Services

  addtocart(product: any){
    //cal the method
    this.cartService.addToCart(product);
  }
  


  decrement(value:string){

  }

  size(value:string){
    if(this.productsize < 9 && value =="max"){
      this.productsize += 1
    } else if (this.productsize > 1 && value == "min"){
      this.productsize -= 1;
    }
    
  }
  

  share() {
    window.alert('The product has been shared!');
  }


  


}

// export class ProductsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
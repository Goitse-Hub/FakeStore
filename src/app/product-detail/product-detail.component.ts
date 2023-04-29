import { Component, Input } from '@angular/core';
import { Product } from '../products'
// 

// import { Hero } from '../hero';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  
  @Input() product?: Product;

  
  // itemsincart: number=0

// addCart(value: string){
  //   if(this.itemsincart < 20 && value == "cart"){
  //     this.itemsincart += 1
  //   }
  // }

  productsize:number=3;

  constructor(){

  }
  ngOnInit(): void {

  }

  decrement(value:string){

  }

  size(value:string){
    if(this.productsize < 9 && value =="max"){
      this.productsize += 1
    } else if (this.productsize > 3 && value == "min"){
      this.productsize -= 1;
    }
    
  }

}

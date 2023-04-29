import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  public cartproduct: any = []
  public subTotal !: number

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.cartproduct = res;
      this.subTotal = this.cartService.getTotalAmount();
    })
  }

  deleteProduct(product:any){
    //inject the service
    this.cartService.deleteCartProduct(product)
  }

  deleteAllProducts(){
    this.cartService.deleteAllCart();
  }

}




// Old
// export class CartComponent{

//     headers = ["Product", "Price", "Quantity", "Subtotal"];
  
//     rows =[
//       {
//         Product : "Nike",
//         Price : "200",
//         Quantity : "1",
//         Subtotal: "200"
//       },
//       {
//         "Product" : "Nike",
//         "Price" : "200",
//         "Quantity" : "1",
//         "Subtotal": "200"
//       },
//       {
//         "Product" : "Nike",
//         "Price" : "200",
//         "Quantity" : "1",
//         "Subtotal": "200"
//       },
//       {
//         "Product" : "Nike",
//         "Price" : "200",
//         "Quantity" : "1",
//         "Subtotal": "200"
//       },
//     ]
//   }

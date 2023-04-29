import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {


  //property for cart items
  public totalItemsinCart: number = 0
  
  //inject The Cart Serice In Order To Increment Number Of items In Cart (Navbar)
  constructor(private cartService: CartService) { }

  ngOnInit() {
    //call the get product
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItemsinCart = res.length;
    })
  }

}

import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService:CartService){}

  dataOfCartArray : any

  ngOnInit(): void {
    this.cartService.getstateOfCart().subscribe((res: any) => {
     console.log(
      this.dataOfCartArray = res.cartDataArray);
    });
  }


  inc(id:string){
    this.cartService.increment(id)
  }
  dec(id:any){
    this.cartService.decrement(id)
  }
remove(id:any){
this.cartService.removeFromCart(id)
}


}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private cartService:CartService ){}


  counterOfCart : any

  ngOnInit(){
    this.cartService.getstateOfCart().subscribe((res:any)=>this.counterOfCart=res.counter)
  }


}

import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input()content :any=[];
constructor (private router:Router){}
showDetails(id:string)
{
  // console.log(id)
  this.router.navigate(['details',id])
}
}

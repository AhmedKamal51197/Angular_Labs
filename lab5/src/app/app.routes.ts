import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:'',
  component:HomeComponent

},
{
  path:'login',
  component:LoginComponent
},
{
path:'signup',
component:SignupComponent
},
{
path:'details/:id',
component:DetailsComponent

},
{
  path:'cart',
  component:CartComponent
},
{
    path:'card',
    component:CardComponent
}
,
{
  path:'**',
  component:NotfoundComponent
}
];

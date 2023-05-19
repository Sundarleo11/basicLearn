import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookComponent } from './book/book.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:"", component:BookComponent},
  {path:"cart", component:CardComponent},
  {path:"Login", component:LoginComponent},
  {path:"Register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

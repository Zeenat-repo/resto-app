import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { ListRestaurentComponent } from './list-restaurent/list-restaurent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';

const routes: Routes = [
  {component:AddRestaurentComponent,path:'add'},
  {component:UpdateRestaurentComponent,path:'update'},
  {component:ListRestaurentComponent,path:'list'},
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

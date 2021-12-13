import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { AddNewMobComponent } from './add-new-mob/add-new-mob.component';
import { EditMobileComponent } from './edit-mobile/edit-mobile.component';

const routes: Routes = [
  {path:'all',component:MobileListComponent},
  {path:'add',component:AddNewMobComponent},
  {path:'edit/:id',component:EditMobileComponent}
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

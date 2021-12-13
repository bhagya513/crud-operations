import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { AddNewMobComponent } from './add-new-mob/add-new-mob.component';
import { EditMobileComponent } from './edit-mobile/edit-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileListComponent,
    AddNewMobComponent,
    EditMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

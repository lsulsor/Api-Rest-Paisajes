import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaisajeFormComponent } from './components/paisaje-form/paisaje-form.component';
import { PaisajeListComponent } from './components/paisaje-list/paisaje-list.component';
import {PaisajesService} from './services/paisajes.service';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PaisajeFormComponent,
    PaisajeListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [
    PaisajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

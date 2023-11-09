import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { AgradecimientoComponent } from './pages/agradecimiento/agradecimiento.component';

import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { DonacionAlimentoComponent } from './pages/donacion-alimento/donacion-alimento.component';
import { AlianzasComponent } from './pages/alianzas/alianzas.component';
import { DonarAhoraComponent } from './pages/donar-ahora/donar-ahora.component';
import { DonacionEconomicaComponent } from './pages/donacion-economica/donacion-economica.component';


@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    DonarAhoraComponent,
    DonacionAlimentoComponent,
    DonacionEconomicaComponent,
    AlianzasComponent,
    AgradecimientoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';


// Angular Material ----------------------------------------------------------------
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

//Conection ---------------------------------------------------------------------

import { ConectionModule } from './modules/conection/conection.module';


//Personal components ----------------------------------------------------------------
import { PersonalComponentsModule } from './modules/personal-components/personal-components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DeleteWorkSpaceModalComponent } from './components/smallComponents/delete-work-space-modal/delete-work-space-modal.component';
import { AccessWorkSpaceModalComponent } from './components/smallComponents/access-work-space-modal/access-work-space-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteWorkSpaceModalComponent,
    AccessWorkSpaceModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ConectionModule,
    FormsModule,
    PersonalComponentsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
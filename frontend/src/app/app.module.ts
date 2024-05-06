import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth-interceptor.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { ListaComponent } from './lista/lista.component';
import { SerieComponent } from './serie/serie.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    BibliotecaComponent,
    ListaComponent,
    SerieComponent,
    CatalogoComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

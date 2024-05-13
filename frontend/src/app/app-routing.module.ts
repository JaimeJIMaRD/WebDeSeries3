import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SerieComponent } from './serie/serie.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'series/:id', component: SerieComponent },
  { path: 'biblioteca', component: BibliotecaComponent },
  { path: 'listas/:id', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
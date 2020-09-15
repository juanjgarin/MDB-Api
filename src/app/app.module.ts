import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http' 
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MostpopularComponent } from './components/mostpopular/mostpopular.component';
import { CardsComponent } from './components/cards/cards.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculaImagenPipe } from './components/pipes/pipes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'mostpopular', component: MostpopularComponent },
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: '',component: HomeComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    MostpopularComponent,
    CardsComponent,
    PeliculaComponent,
    PeliculaImagenPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

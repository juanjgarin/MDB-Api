import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{

  @Input() 
  items: any[] = [];

  constructor(private router: Router) { }

  verMovies(item: any){
    let peliculaId;
    peliculaId = item.id;
    this.router.navigate(["/pelicula", peliculaId]);
  }

}

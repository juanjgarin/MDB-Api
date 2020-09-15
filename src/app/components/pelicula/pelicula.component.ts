import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../services/moviedb.service';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  pelicula: any = {};

  constructor(private router: ActivatedRoute, private moviedb:MoviedbService) {

    this.router.params.subscribe(params => {
      console.log(params);

      this.moviedb.getMovie(params['id'])
        .subscribe(pelicula => {
          console.log(pelicula);
          this.pelicula = pelicula;
        })
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { MoviedbService } from 'src/app/services/moviedb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movies: any[] = [];  

  constructor(private moviedb: MoviedbService) { }

  search(clave: string){
    console.log(clave);

    this.moviedb.getSearchMovies(clave).subscribe((data:any) => {
      console.log(data);

      this.movies = data;
    })
  }


}

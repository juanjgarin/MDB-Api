import { Component, OnInit } from '@angular/core';

import { MoviedbService } from '../../services/moviedb.service';

@Component({
  selector: 'app-mostpopular',
  templateUrl: './mostpopular.component.html',
  styleUrls: ['./mostpopular.component.css']
})
export class MostpopularComponent {

  pelisArray: any[] = [];

  constructor(private moviedb: MoviedbService) { }

  ngOnInit(){

    this.moviedb.getDiscoverMovies().subscribe((data: any)=>{
      console.log(data);
      this.pelisArray = data;
    } );

  }

}

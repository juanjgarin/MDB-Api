import { Component, OnInit } from '@angular/core';

//service
import { MoviedbService } from '../../services/moviedb.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  pelisArray: any[] = [];

  constructor(private moviedb: MoviedbService) { }

    ngOnInit(){
      this.moviedb.getActuales().subscribe((data: any) =>{
        console.log(data);
        this.pelisArray = data;
      })
    }
}

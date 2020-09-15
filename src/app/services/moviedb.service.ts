import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

//declaro variables apikey y url de la api

  private apikey: string = "98d620af29fb554885f1f73a611c600b";
  private urlMoviedb: string = "https://api.themoviedb.org/3/";


  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.http.jsonp(url, "");
  }

  getQueryforMovies(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    // Si la peticion se hace con http.get da error porque moviedb no acepta cross domain
    //por eso es importante verificar el uso de jsonp para poder hacer solicitud a otros dominios
    return this.http.jsonp(url, "");
    }

  getDiscoverMovies(){
    return this.getQuery("/discover/movie?sort_by=popularity.desc").pipe(map((data: any) => data.results)
    );
  }
  
  getActuales(){
    return this.getQuery("/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2019-10-10").pipe(map((data: any)=> data.results)
    );
  }

  getMovie(id: string) {
    return this.getQueryforMovies(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  };

  getSearchMovies(clave: string){
    return this.getQuery(
      `/search/movie?query=${clave}&sort_by=popularity.desc`
    ).pipe(map((data:any) => data.results));
  }
  
}

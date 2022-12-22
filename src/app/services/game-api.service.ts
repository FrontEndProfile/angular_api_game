import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  constructor(private http: HttpClient) { }


  listData: any;
  gameListUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical'
  all_games ='https://free-to-play-games-database.p.rapidapi.com/api/games'

  data: any;

  card_tittle: any;

  ngOnInit(): void {
    // API Call
  }

  getGameList(){
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '8f86057d35msh4abb53f571dc0b5p1bb056jsn9670b223a536'
    });
    return this.http.get(this.all_games, {headers})     
  }

}

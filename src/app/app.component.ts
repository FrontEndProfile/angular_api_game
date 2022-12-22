import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GameApiService } from "./services/game-api.service";
import { OnInit } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Game_site_use_api';
  gameListingData:any
  constructor(private gameService:GameApiService){
    console.log("game",gameService);

    // this.listData


  }

  ngOnInit(): void {
    this.gameService.getGameList().subscribe(res => {
      this.gameListingData = res;
      console.log(res)
    });
  }

  



  // listData: any;

  // short_btn = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical'
  // all_games ='https://free-to-play-games-database.p.rapidapi.com/api/games'

  // data: any;
  // constructor(private http: HttpClient) { }

  // card_tittle: any;

  // ngOnInit() {
  //   // API Call
  //   let headers = new HttpHeaders({
  //     'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  //     'x-rapidapi-key': '8f86057d35msh4abb53f571dc0b5p1bb056jsn9670b223a536'
  //   });
  //   this.http
  //     .get<any>(this.short_btn, {
  //       headers: headers
  //     })
  //     .subscribe((data): void => {
  //       const list = data;
  //       this.listData = list;
  //       list.map((item: any) => {
  //       })

  //     });
  // }

}

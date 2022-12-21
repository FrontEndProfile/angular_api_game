import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game_site_use_api';
  listData: any;


  // img_title: any; 
  // poster: any;
  // small_info: any;
  // download_link: any;
  // game_type: any;
  // platform_type: any;
  // publisher_auth: any;
  // release_time: any;
  // togame_game_url: any;
  // dev_name: any;



  short_btn = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical'

  all_games ='https://free-to-play-games-database.p.rapidapi.com/api/games'


  data: any;
  constructor(private http: HttpClient) { }










  card_tittle: any;

  ngOnInit() {
    // API Call
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': '8f86057d35msh4abb53f571dc0b5p1bb056jsn9670b223a536'
    });
    this.http
      .get<any>(this.short_btn, {
        headers: headers
      })
      .subscribe((data): void => {
        // console.log(data);

        // console.log(data[0].id)
        // const img_title = data[0].id;


        // console.log(img_title);




        const list = data;
        this.listData = list;
        list.map((item: any) => {
          // this.img_title = item.title;
          // this.poster = item.thumbnail;
          // this.small_info = item.short_description;
          // this.download_link = item.game_url;
          // this.game_type = item.genre;
          // this.platform_type = item.platform;
          // this.publisher_auth = item.publisher;
          // this.release_time = item.release_date;
          // this.togame_game_url = item.freetogame_profile_url;
          // this.dev_name = item.developer;

          // console.log(this.poster)



        })

      });
  }




}

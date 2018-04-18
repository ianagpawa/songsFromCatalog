import { Component, OnInit } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  song: Song = {
    artist: "Paul Simon", 
    genre: "", 
    id: 206,
    playlist_id: 5, 
    rendition: "", 
    time_created: "December 20, 2017", 
    title: "You Can Call Me Al", 
    user_id: 1, 
    youtube: "https://www.youtube.com/watch?v=YeYPLhCFrP0"
  };

  constructor() { }

  ngOnInit() {
  }

}

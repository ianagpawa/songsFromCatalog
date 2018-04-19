import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { Songs } from '../mock_songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
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

  songs = Songs;
  
  selectedSong: Song;

  onSelect(song: Song): void{
    this.selectedSong = song;
  }

  constructor() { }

  ngOnInit() {
  }

}

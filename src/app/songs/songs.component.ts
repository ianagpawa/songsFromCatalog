import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridNg2 } from 'ag-grid-angular';

import { Song } from '../song';
import { SONGS } from '../mock_songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})

export class SongsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.rowData = SONGS;
  }

  @ViewChild('agGrid') agGrid: AgGridNg2;

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

  selectedSong: Song;

  rowData: Song[];

  columnDefs = [
    {headerName: 'ID', field: 'id' },
    {headerName: 'Title', field: 'title' },
    {headerName: 'Artist', field: 'artist' },
    {headerName: 'Youtube Link', field: 'youtube' },
    {headerName: 'Time Created', field: 'time_created' },
    {headerName: 'Playlist ID', field: 'playlist_id' },
    {headerName: 'User ID', field: 'user_id' }
  ]

  selectSong(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedSong = selectedNodes.map( node => node.data ).find(u => u.id === u.id);
    this.selectedSong = selectedSong;
  }
  



  

}

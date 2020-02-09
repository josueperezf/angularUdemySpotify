import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service' ;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public artistas;
  public loading = false;
  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
  }
  buscar(termino: string) {
    this.loading = true;

    this.spotifyService.buscarArtista(termino).subscribe(
      data => {
        this.artistas = data;
        this.loading = false;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicios/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  public artistaId = 0;
  public artista;
  public topTracks;
  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
    ) {
      this.activatedRoute.params.subscribe((data: any) => {
        this.artistaId = data.id;
        this.cargarData();
        this.getTopTracks();
      });
    }
    cargarData() {
      this.spotifyService.getArtista(this.artistaId).subscribe(
        data => this.artista = data
      );
    }
    getTopTracks() {
      this.spotifyService.getTopCanciones(this.artistaId).subscribe(
        data => {this.topTracks = data; console.log(data);
        }
      );
    }
  ngOnInit(): void {
  }

}

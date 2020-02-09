import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lanzamientos: any;
  loading = true;
  error = false;
  errorMensaje = '';
  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit(): void {
    this.spotifyService.nuevosLanzamientos()
        .subscribe({
          next: (data) => {this.lanzamientos = data; this.loading = false; },
          error: (error) => { this.error = true; this.errorMensaje = error.error.error.message; this.loading = false; }
        }
        );
  }

}

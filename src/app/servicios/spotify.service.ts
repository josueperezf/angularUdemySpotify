import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public url = 'https://api.spotify.com/v1/';
  public token = 'BQCp0oEpASuJmcXaDCe8NzY_EIvlGZCTEA1xmR08sQF3G1EJK75zhPa2kwdCsj-7rvwDQMx17tzqTIJShbs';
  /*
  los token duran 1 hora, se debe hacer otra solicitd postman a:
  https://accounts.spotify.com/api/token
  x-wwww-form-
  parametros
  grant_type client_credentials
  client_id cfbe70c4118f409183fd8f346212f553
  client_secret d062a1971d454ce6861ac8a1f03e6525
  */
  constructor( private http: HttpClient ) { }
  peticionGet(parametro) {
    const httpHeaders = new HttpHeaders({
       Authorization : 'Bearer ' + this.token
      });
    return this.http.get(this.url + parametro,  { headers: httpHeaders });
  }
  nuevosLanzamientos() {
    return this.peticionGet('browse/new-releases').pipe(
      map( (data: any) => data.albums.items )
    );
  }
  buscarArtista(termino) {
    const  parametro = `search?q=${termino}&type=artist`;
    return this.peticionGet(parametro).pipe(
      map( (data: any) => data.artists.items )
    );
  }
  getArtista(artistaId) {
    const  parametro = `artists/${artistaId}`;
    return this.peticionGet(parametro);
  }
  getTopCanciones(artistaId) {
    const  parametro = `artists/${artistaId}/top-tracks?country=us`;
    return this.peticionGet(parametro).pipe(
      map((data: any) => data.tracks )
    );
  }
}

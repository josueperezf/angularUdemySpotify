import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() public items;
  constructor( private router: Router ) {
  }
  ngOnInit(): void {
  }
  verArtista(item) {
    let artistaId;
    if (item.type === 'artist' ) {
      artistaId = item.id;
    } else if (item.type === 'album' ) {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['artista', artistaId]);
  }
}

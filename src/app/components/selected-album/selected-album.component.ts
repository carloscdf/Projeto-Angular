import { Component, inject } from '@angular/core';
import { Album } from '../interfaces/Album';
import { AlbunsService } from '../../services/albuns.service';
import { ActivatedRoute } from '@angular/router';
import { AlbumCoversComponent } from '../album-covers/album-covers.component';

@Component({
  selector: 'app-selected-album',
  standalone: true,
  imports: [AlbumCoversComponent],
  templateUrl: './selected-album.component.html',
  styleUrl: './selected-album.component.css'
})
export class SelectedAlbumComponent {
  selectedAlbum:Album | undefined;
  route:ActivatedRoute = inject(ActivatedRoute);
  albunsService: AlbunsService = inject(AlbunsService); // injetando o serviço

  constructor(){
    const id = Number(this.route.snapshot.params['id']);
    this.albunsService.getAlbumById(id).then(album=>{
      this.selectedAlbum = album
    })
  }


}

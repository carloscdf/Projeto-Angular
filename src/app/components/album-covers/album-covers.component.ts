import { Component, inject, Input } from '@angular/core';
//Importações feitas por mim
import { AlbunsService } from '../../services/albuns.service';
import { CommonModule } from '@angular/common';
import { Album } from '../interfaces/Album';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-covers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-covers.component.html',
  styleUrl: './album-covers.component.css'
})

export class AlbumCoversComponent {
  albunsList:Album[] = []; //Lista de albuns
  albunsServce: AlbunsService = inject(AlbunsService); // injetando o serviço
  constructor(){
    // chamando o método para buscar os álbuns do serviço
    this.albunsServce.getAllAlbuns().then((albuns=>{
      this.albunsList = albuns;  // atribuindo os álbuns retornados à lista
    }))
  }

  reloadPage() {
    window.location.reload();
  }
}

import { Injectable } from '@angular/core';
import { Album } from '../components/interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {
  url = 'http://localhost:3000/albums'; //url para acessar os álbuns no servidor local
  constructor() { }

  async getAllAlbuns(): Promise<Album[]>{
    const data = await fetch(this.url); //faz uma requisição fetch para a url especificada
    return data.json(); //retorna os dados no formato json
  }

  async getAlbumById(id: number):Promise<Album | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
  }
}

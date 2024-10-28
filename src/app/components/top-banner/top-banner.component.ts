import { Component } from '@angular/core';
import { AlbumCoversComponent } from '../album-covers/album-covers.component';

@Component({
  selector: 'app-top-banner',
  standalone: true,
  imports: [AlbumCoversComponent],
  templateUrl: './top-banner.component.html',
  styleUrl: './top-banner.component.css'
})
export class TopBannerComponent {

}

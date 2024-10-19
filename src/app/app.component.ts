import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*Importações feitas por mim*/
import { HeaderComponent } from './components/header/header.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { AlbumCoversComponent } from './components/album-covers/album-covers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopBannerComponent, AlbumCoversComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SONNER';
}

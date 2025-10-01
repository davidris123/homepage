import { 
  Component, 
  OnInit, 
  signal, 
  inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from '../services/theme';
import { LanguageService } from '../services/language';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {

  // Expose services to the template for state and methods
  public themeService = inject(ThemeService); 
  public langService = inject(LanguageService); 

  // Flag to manage rendering after initialization/hydration
  ready = signal(false);

  ngOnInit(): void {
    this.ready.set(true);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FontAwesomeModule, TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}

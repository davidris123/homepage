import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FontAwesomeModule, TranslatePipe],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-github',
  imports: [CommonModule, TranslatePipe, FontAwesomeModule],
  templateUrl: './github.html',
  styleUrl: './github.css'
})
export class Github {

}

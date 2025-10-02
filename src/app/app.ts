import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { About } from './about/about';
import { Github } from './github/github';
import { Faq } from './faq/faq';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, About, Github, Faq, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finki-hub');
}

import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CookieService } from 'ngx-cookie-service'; // <-- Import

type Theme = 'light-mode' | 'dark-mode';
const THEME_COOKIE_KEY = 'app-theme';
const COOKIE_EXPIRY_DAYS = 1;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private cookieService = inject(CookieService);

  readonly theme = signal<Theme>('light-mode'); 

  constructor() {
    this.initializeTheme(); // Initialize on both server (read from request) and browser

    if (isPlatformBrowser(this.platformId)) {
      // Effect to persist theme changes and apply class to body
      effect(() => {
        const currentTheme = this.theme();
        
        // 1. Apply theme class to body (Browser-only side effect)
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(currentTheme);
        
        // 2. Persist to Cookie (Browser-only write)
        this.cookieService.set(THEME_COOKIE_KEY, currentTheme, COOKIE_EXPIRY_DAYS);
      });
    }
  }

  private initializeTheme(): void {
    const storedTheme = this.cookieService.get(THEME_COOKIE_KEY); // <-- Read from Cookie
    
    if (storedTheme === 'light-mode' || storedTheme === 'dark-mode') {
      this.theme.set(storedTheme);
    }
  }

  toggleTheme(): void {
    this.theme.update(current => (current === 'light-mode' ? 'dark-mode' : 'light-mode'));
  }

  getThemeIcon(): [string, string] {
    return this.theme() === 'light-mode' ? ['fas', 'moon'] : ['fas', 'sun'];
  }
}
import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service'; 

type Language = 'en' | 'mk';
const LANG_COOKIE_KEY = 'app-lang';
const COOKIE_EXPIRY_DAYS = 1;
const DEFAULT_LANG: Language = 'mk'; 


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private platformId = inject(PLATFORM_ID);
  private translate = inject(TranslateService);
  private cookieService = inject(CookieService);
  
  
  readonly lang = signal<Language>(DEFAULT_LANG); 

  constructor() {
    this.translate.addLangs(['en', 'mk']); 
    this.initializeLanguage(); // Initial read from cookie (SSR-friendly)
    
    if (isPlatformBrowser(this.platformId)) {
      // Effect to switch translation and persist changes in the browser
      effect(() => {
        const currentLang = this.lang();
        
        // 1. Set the language for ngx-translate
        this.translate.use(currentLang); 
        
        // 2. Persist to Cookie 
        this.cookieService.set(LANG_COOKIE_KEY, currentLang, COOKIE_EXPIRY_DAYS);
      });
    }
  }

  private initializeLanguage(): void {
    const storedLang = this.cookieService.get(LANG_COOKIE_KEY);
    if (storedLang === 'en' || storedLang === 'mk') {
      this.lang.set(storedLang);
    }
    this.translate.setFallbackLang('mk');
  }
  
  changeLanguage(newLang: Language): void {
    this.lang.set(newLang);
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'Quiz-App-Theme';
  private isDarkTheme = false;

  constructor() {
    this.initTheme();
  }

  initTheme() {
    const theme = localStorage.getItem(this.THEME_KEY);
    if (theme) {
      this.isDarkTheme = theme === 'dark';
    } else {
      localStorage.setItem(this.THEME_KEY, this.isDarkTheme ? 'dark' : 'light'); // Fallback to System Preference
      this.isDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
    }
    this.applyTheme();
  }

  applyTheme() {
    if (this.isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem(this.THEME_KEY, this.isDarkTheme ? 'dark' : 'light');
    this.applyTheme();
  }

  isDark() {
    return this.isDarkTheme;
  }
}

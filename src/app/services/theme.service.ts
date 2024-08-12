// theme.service.ts

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { Theme } from '../interfaces';
import { macDark, macLight } from '../shared/const/themes.const';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active!: Theme;
  private availableThemes: Theme[] = [macLight, macDark];

  constructor() {}

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}

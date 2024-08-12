// theme.service.ts

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import {
  light,
  dark,
  defaultTheme,
  green,
  pink,
  purple,
} from '../shared/const';
import { Theme } from '../interfaces';
import { macDark, macLight } from '../shared/const/themes.const';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active!: Theme;
  private availableThemes: Theme[] = [
    light,
    dark,
    defaultTheme,
    green,
    pink,
    purple,
    macLight,
    macDark,
  ];

  constructor() {}

  setDefaultTheme() {
    this.setActiveTheme(defaultTheme);
  }

  setPurple() {
    this.setActiveTheme(purple);
  }

  setGreen() {
    this.setActiveTheme(green);
  }

  setPink() {
    this.setActiveTheme(pink);
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    console.log('🚀 ~ ThemeService ~ setActiveTheme ~ theme:', theme);
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}

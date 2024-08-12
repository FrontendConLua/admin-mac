import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from './mac/template/template.component';
import { ThemeService } from './services';
import { macLight } from './shared/const/themes.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private _themeService = inject(ThemeService);

  ngOnInit(): void {
    this._themeService.setActiveTheme(macLight);
  }
  title = 'admin-mac';
}

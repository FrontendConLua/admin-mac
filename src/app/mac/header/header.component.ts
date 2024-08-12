import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ThemeService } from '../../services';
import { macDark, macLight } from '../../shared/const/themes.const';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  dark = false;
  @Input() close = false;
  @Output() btnSidebar = new EventEmitter<boolean>();

  private _themeService = inject(ThemeService);
  ngOnInit(): void {}
  changeTheme() {
    this.dark = !this.dark;
    if (this.dark) {
      this._themeService.setActiveTheme(macDark);
    } else {
      this._themeService.setActiveTheme(macLight);
    }
  }

  openSidebar() {
    this.close = !this.close;
    this.btnSidebar.emit(this.close);
  }
}

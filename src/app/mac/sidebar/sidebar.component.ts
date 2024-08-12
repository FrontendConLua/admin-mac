import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MacMenu } from '../interfaces/mac-menu.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarComponent {
  @Input() close = true;
  macMenu: MacMenu[] = [
    {
      id: 1,
      icon: 'pie-chart-outline',
      title: 'Overview',
      url: 'overview',
      active: true,
    },
    {
      id: 2,
      icon: 'bag-handle-outline',
      title: 'eCommerce',
      url: 'eCommerce',
      active: false,
    },
    {
      id: 3,
      icon: 'folder-outline',
      title: 'Projects',
      url: 'Projects',
      active: false,
    },
    {
      id: 4,
      icon: 'id-card-outline',
      title: 'User Profile',
      url: 'profile',
      active: false,
    },
    {
      id: 5,
      icon: 'card-outline',
      title: 'Account',
      url: 'Account',
      active: false,
    },
    {
      id: 6,
      icon: 'people-outline',
      title: 'Corporate',
      url: 'Corporate',
      active: false,
    },
    {
      id: 7,
      icon: 'laptop-outline',
      title: 'Blog',
      url: 'Blog',
      active: false,
    },
    {
      id: 8,
      icon: 'chatbubbles-outline',
      title: 'Social',
      url: 'Social',
      active: false,
    },
  ];
  selectItem(item: MacMenu) {
    this.cleanItemSelect();
    item.active = true;
  }
  cleanItemSelect() {
    this.macMenu.forEach((item: MacMenu) => {
      item.active = false;
    });
  }
}

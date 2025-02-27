import { Component, inject, input, OnInit, signal } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu_items.type';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  menuService = inject(MenuService);
  menuItems = signal<Array<MenuItem>>([]);
  ngOnInit(): void {
      this.menuItems.set(this.menuService.menuItems);
  }
}
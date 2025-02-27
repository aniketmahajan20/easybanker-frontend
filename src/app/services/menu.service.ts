import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu_items.type';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: Array<MenuItem> = [{
    itemId: 0,
    available: true,
    itemName: "Daal Makhni",
    itemDescription: "A Tasty blend of black lentils and Butter, A must have for family meals",
    cost: 19
  },
  {
    itemId: 1,
    available: false,
    itemName: "Chicken Vindaloo",
    itemDescription: "Known for its spicy and tangy flavor combination",
    cost: 20
  },
  {
    itemId: 2,
    available: true,
    itemName: "BURRATA",
    itemDescription: "roasted beets, shiso olive pesto, toasted hazelnut, pickled beets, sweet beet powder, basil oil, crispy roots, chinese donut",
    cost: 29
  },
  {
    itemId: 3,
    available: true,
    itemName: "Lachcha Paratha",
    itemDescription: "This legacy naan recipe from India whih is crunchy and soft at the same time",
    cost: 4
  }
]
  constructor() { }
}
import { Component } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-easybanker',
  imports: [MenuComponent],
  templateUrl: './easybanker.component.html',
  styleUrl: './easybanker.component.css'
})
export class EasybankerComponent {

  keyUpHandler(event: KeyboardEvent){
    console.log(`user pressed the ${event.key} key`);
  }
}

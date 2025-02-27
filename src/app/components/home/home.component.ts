import { Component, signal } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal("Daal Makhni")

  keyUpHandler(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`)
  }
}

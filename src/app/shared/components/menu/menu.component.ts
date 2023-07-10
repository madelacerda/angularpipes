import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'otro elementos',
            icon: 'pi pi-cog'
          }
        ]
      }
    ];
  }
}

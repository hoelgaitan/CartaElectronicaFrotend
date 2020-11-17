import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      path: '/productos',
      name: 'Productos'
    },
    {
      path: '/bebidas',
      name: 'Bebidas'
    },
    {
      path: '/pastas',
      name: 'Pastas'
    },
    {
      path: '/ensaladas',
      name: 'Ensaladas'
    }
  ];
  constructor() { }

  ngOnInit() {}

}

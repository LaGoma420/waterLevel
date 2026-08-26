import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Tinacos', url: '/tinacos', icon: 'home' },
  ];
  public labels = ['Version Prueba 2'];
  constructor() {}
}

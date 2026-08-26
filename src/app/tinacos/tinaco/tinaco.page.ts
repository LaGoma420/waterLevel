import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinaco',
  templateUrl: './tinaco.page.html',
  styleUrls: ['./tinaco.page.scss'],
  standalone: false
})
export class TinacoPage implements OnInit {

  nivelActual = 4;

  constructor() { }

  ngOnInit() {
  }

}

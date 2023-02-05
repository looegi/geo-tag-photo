import { Component } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Taka a photo', url: '/capture', icon: 'camera' },
    { title: 'View Gallery', url: '/view', icon: 'globe' },
  ];

  
}

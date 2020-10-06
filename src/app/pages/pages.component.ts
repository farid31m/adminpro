import { Component} from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent {
  constructor( private settingsService: SettingsService){}
  ngOnInit(): void {
    customFunction();
  }
  year = new Date().getFullYear();

}

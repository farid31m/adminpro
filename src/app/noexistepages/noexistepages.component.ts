import { Component} from '@angular/core';

@Component({
  selector: 'app-noexistepages',
  templateUrl: './noexistepages.component.html',
  styleUrls: [ './noexistepages.component.css']
})
export class NoexistepagesComponent{

  year = new Date().getFullYear();

}

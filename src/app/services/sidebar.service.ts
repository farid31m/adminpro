import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
     {
       titulo: 'Indicador Menu',
       icono: 'mdi mdi-gauge',
       subMenu: [
         { titulo: 'dashboard', url: '/'},
         { titulo: 'ProgressBar', url: 'progress'},
         { titulo: 'Graficas', url: 'grafica1'},
       ]
     }
  ];
  constructor() { }
}

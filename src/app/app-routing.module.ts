
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NoexistepagesComponent } from './noexistepages/noexistepages.component';


const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   { path: '**', component: NoexistepagesComponent }
];

@NgModule({
    declarations: [],
    imports:[
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule ]
})

export class AppRoutingModule{}
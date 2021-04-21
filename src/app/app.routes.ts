import { Component } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { BodyComponent } from "./components/body/body.component";
import {MensajeComponent} from './components/mensaje/mensaje.component'

const app_routes:Routes = [
    {path: 'body', component:BodyComponent},
    {path: 'mensaje', component:MensajeComponent},
    {path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {Route, RouterModule} from "@angular/router";
import {LoggerComponent} from "./logger.component";
import {DummyService} from "./dummy.service";
import {LoggerAlternativeComponent} from "./logger-alternative.component";

const routes: Route[] = [
    {
        path: 'logger',
        component: LoggerComponent
    },
    {
        path: 'logger-alternative',
        component: LoggerAlternativeComponent
    },
    {
        path: 'hello',
        component: HelloComponent
    }
];

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        LoggerComponent,
        LoggerAlternativeComponent,
        HelloComponent
    ],
    providers: [
        DummyService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

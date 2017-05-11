import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app.routes';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home.component";
import { AboutComponent } from "app/components/about.component";
import { PageNotFoundComponent } from "app/components/pagenotfound.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

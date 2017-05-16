
import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.html'
})
export class HomeComponent implements OnChanges, OnInit, OnDestroy {

    constructor(){
        console.log("constructor executed")
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("OnChanges event executed", changes)
    }

    ngOnInit(): void {
        console.log("OnInit event executed")
    }

    ngOnDestroy(): void {
        console.log("OnDestroy event executed")
    }
}

import { HomeComponent } from "app/components/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "app/components/pagenotfound.component";
import { AboutComponent } from "app/components/about.component";

const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        data:{ preload:true}
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path: "",
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //AuthGuards
    ]
})
export class AppRoutingModule { }
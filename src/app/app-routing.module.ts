import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodoListComponent } from "./todo/todo-list.component";
import { PageNotNotFoundComponent } from "./page-not-not-found.component"

const routes: Routes = [
    { path: "", redirectTo: "todos", pathMatch: "full" },
    { path: "**", component: PageNotNotFoundComponent }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
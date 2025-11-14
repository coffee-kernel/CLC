import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardroutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./pages/dashboard.component";

@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        DashboardroutingModule,
        DashboardComponent
    ],
})
export class DashboardModule { }
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PolicyRoutingModule } from "./policy-routing.module";
import { PolicyComponent } from "./pages/policy.component";

@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        PolicyRoutingModule,
        PolicyComponent
    ],
})
export class PolicyModule {}
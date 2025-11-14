import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComplianceroutingModule } from "./compliance-routing.module";
import { ComplianceComponent } from "./pages/compliance.component";

@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        ComplianceroutingModule,
        ComplianceComponent
    ],
})
export class ComplianceModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuditRoutingModule } from "./audit-routing.module";
import { AuditComponent } from "./pages/audit.component";

@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        AuditRoutingModule, 
        AuditComponent
    ],
})
export class AuditModule {}
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserManagementroutingModule } from "./user-management-routing.module";
import { UserManagementComponent } from "./pages/user-management.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserManagementroutingModule,
    UserManagementComponent
  ],
})
export class UserManagementModule {}
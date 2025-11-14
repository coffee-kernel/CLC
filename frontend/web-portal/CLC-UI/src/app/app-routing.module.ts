import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layout
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// Auth Guard (protects logged-in routes)
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'compliance',
        loadChildren: () =>
          import('./features/compliance/compliance.module').then(
            (m) => m.ComplianceModule
          ),
      },
      {
        path: 'policy',
        loadChildren: () =>
          import('./features/policy/policy.module').then(
            (m) => m.PolicyModule
          ),
      },
      {
        path: 'audit',
        loadChildren: () =>
          import('./features/audit/audit.module').then(
            (m) => m.AuditModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
    ],
  },

  // Catch-all
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

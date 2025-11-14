import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
  ],
})
export class AppModule {}

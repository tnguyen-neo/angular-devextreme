import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'data-book',
    loadChildren: () =>
      import('./pages/data-book/data-book.module').then((m) => m.DataBookModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxFormModule],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [HomeComponent, ProfileComponent],
})
export class AppRoutingModule {}

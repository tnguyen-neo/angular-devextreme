import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBookComponent } from './data-book.component';
import { AuthGuardService } from 'src/app/shared/services';

const routes: Routes = [
  {
    path: '',
    component: DataBookComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class TasksRoutingModule {}

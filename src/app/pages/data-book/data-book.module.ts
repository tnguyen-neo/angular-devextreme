import { NgModule } from '@angular/core';
import { DataBookComponent } from './data-book.component';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { TasksRoutingModule } from './data-book-routing.module';

@NgModule({
  declarations: [DataBookComponent],
  imports: [TasksRoutingModule, DxDataGridModule, DxButtonModule],
})
export class DataBookModule {}

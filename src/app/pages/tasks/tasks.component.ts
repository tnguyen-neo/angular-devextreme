import { Component, inject } from '@angular/core';
import 'devextreme/data/odata/store';
import { TasksService } from './tasks.service';
import { TasksData } from './models/data';

@Component({
  templateUrl: 'tasks.component.html',
})
export class TasksComponent {
  task$ = inject(TasksService);
  dataSource: any = TasksData;

  constructor() {}

  showInfo(a: any) {
    console.log(a);
    return '123';
  }

  getImageUrl(data: any) {
    return data.data.avatar;
  }
}

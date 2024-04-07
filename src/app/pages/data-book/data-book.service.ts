import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TasksData } from './models/data';
import { DataBook } from './models/data-book.type';

@Injectable({
  providedIn: 'root',
})
export class DataBookService {
  http: HttpClient = inject(HttpClient);
  api: string = 'https://661103a40640280f219def0f.mockapi.io/address-book';
  TasksData: any[] = TasksData;

  constructor() {}

  getData(): Observable<DataBook[]> {
    const data = this.TasksData.filter((task: DataBook) => !task?.deleted);
    return of(data);
  }

  remove(id: string[] | number[]) {
    id.forEach((id: string | number) => {
      const task = this.TasksData.find((t) => t.id === id);
      task.deleted = true;
    });
  }

  add(data: DataBook) {
    const task = {
      ...data,
      id: this.TasksData.length + 1,
    };
    this.TasksData.push(task);
  }

  edit(data: DataBook) {
    const index = this.TasksData.indexOf((t: DataBook) => t.id === data.id);
    TasksData.splice(index, 1, data);
  }
}

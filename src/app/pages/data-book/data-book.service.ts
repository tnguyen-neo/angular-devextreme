import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataBooks } from './models/data';
import { DataBook } from './models/data-book.type';

@Injectable({
  providedIn: 'root',
})
export class DataBookService {
  http: HttpClient = inject(HttpClient);
  api: string = 'https://661103a40640280f219def0f.mockapi.io/address-book';
  data: DataBook[] = DataBooks;

  private dataBookSubject: BehaviorSubject<DataBook[]> = new BehaviorSubject<
    DataBook[]
  >(this.getData());
  dataBook$: Observable<DataBook[]> = this.dataBookSubject.asObservable();

  constructor() {}

  emitData() {
    const data = this.getData();
    console.log(data);
    this.dataBookSubject.next(data);
  }

  getData() {
    const data = this.data.filter((dataBook: DataBook) => !dataBook?.deleted);
    return data;
  }

  add(data: DataBook) {
    const task = {
      ...data,
      id: this.data.length + 1,
    };
    this.data.push(task);
    this.emitData();
  }

  edit(data: DataBook) {
    const dataBook = this.data.find((t: DataBook) => t.id === data.id);
    const index = (dataBook && this.data.indexOf(dataBook)) || -1;
    index >= 0 && DataBooks.splice(index, 1, data);
    this.emitData();
  }

  remove(id: string | number) {
    const dataBook = this.data.find((db) => db.id == id);
    dataBook && (dataBook.deleted = true);
    this.emitData();
  }

  removeMany(id: string[] | number[]) {
    id.forEach((id: string | number) => {
      const dataBook = this.data.find((db) => db.id == id);
      dataBook && (dataBook.deleted = true);
    });
    this.emitData();
  }
}

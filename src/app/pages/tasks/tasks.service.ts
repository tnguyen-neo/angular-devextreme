import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  http: HttpClient = inject(HttpClient);
  api: string = 'https://661103a40640280f219def0f.mockapi.io/address-book';

  constructor() {}

  getData(): Observable<any> {
    const data = this.http.get(this.api);
    return data;
  }
}

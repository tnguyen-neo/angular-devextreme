import { Component, inject } from '@angular/core';
import 'devextreme/data/odata/store';
import { DataBookService } from './data-book.service';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { DataBook } from './models/data-book.type';

@Component({
  templateUrl: 'data-book.component.html',
})
export class DataBookComponent {
  dataBook$ = inject(DataBookService);

  dataSource: DataBook[] = [];
  selectedItemKeys: string[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData() {
    this.dataBook$.getData().subscribe({
      next: (data: DataBook[]) => {
        this.dataSource = data;
      },
    });
  }

  getImageUrl(data: any) {
    return data.data.avatar;
  }

  deleteRecords() {
    this.dataBook$.remove(this.selectedItemKeys);
    this.fetchData();
  }

  onSelectionChanged({
    selectedRowKeys,
  }: DxDataGridTypes.SelectionChangedEvent) {
    this.selectedItemKeys = selectedRowKeys;
  }

  onRowInserted(event: any) {
    this.dataBook$.add(event.data);
  }

  onRowUpdated(event: any) {
    this.dataBook$.edit(event.data);
  }
}

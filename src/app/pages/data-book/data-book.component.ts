import { Component, inject, OnDestroy } from '@angular/core';
import 'devextreme/data/odata/store';
import { DataBookService } from './data-book.service';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { DataBook } from './models/data-book.type';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'data-book.component.html',
})
export class DataBookComponent implements OnDestroy {
  dbService = inject(DataBookService);

  dataSource: DataBook[] = [];
  selectedItemKeys: string[] = [];

  dataSubscription?: Subscription;
  broadcastSubscription?: Subscription;

  constructor() {}

  ngOnInit() {
    this.dataSubscription = this.fetchData();
    this.dataSource = this.dbService.getData();
  }

  ngOnDestroy() {
    this.dataSubscription && this.dataSubscription.unsubscribe();
    this.broadcastSubscription && this.broadcastSubscription.unsubscribe();
  }

  fetchData(): Subscription {
    const subscriber = (data: DataBook[]) => {
      this.dataSource = data;
    };
    return this.dbService.subscribe('data', subscriber);
  }

  getImageUrl(data: any) {
    return data.data.avatar;
  }

  deleteRecords() {
    this.dbService.removeMany(this.selectedItemKeys);
    this.selectedItemKeys = [];
  }

  onSelectionChanged({
    selectedRowKeys,
  }: DxDataGridTypes.SelectionChangedEvent) {
    this.selectedItemKeys = selectedRowKeys;
  }

  onRowInserted(event: any) {
    this.dbService.add(event.data);
  }

  onRowUpdated(event: any) {
    this.dbService.edit(event.data);
  }

  onRowRemoved(event: any) {
    this.dbService.remove(event.data.id);
  }
}

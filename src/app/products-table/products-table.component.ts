import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  gridView: GridDataResult;
  state: State = {
    skip: 0,
    take: 10
  };

  constructor() { }

  ngOnInit() {
    this.loadItems();
  }

  dataStateChange(state: DataStateChangeEvent) {
    this.state = state;
    this.loadItems();
  }

  private loadItems() {
    this.gridView = process(products, this.state);
  }
}

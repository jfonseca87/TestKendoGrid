import { Component, OnInit } from '@angular/core';
import { GridDataResult, DataStateChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { MechanicalIntegrityService } from '../mechanical-integrity.service';
import { MechanicalIntegrityModel } from '../mechanical-integrity-model';

@Component({
  selector: 'app-mechanical-integrity',
  templateUrl: './mechanical-integrity.component.html',
  styleUrls: ['./mechanical-integrity.component.css']
})
export class MechanicalIntegrityComponent implements OnInit {
  data: MechanicalIntegrityModel[];
  gridView: GridDataResult;
  state: State = {
    skip: 0,
    take: 10
  };

  constructor(private mechanicalService: MechanicalIntegrityService) { }

  ngOnInit() {
    this.loadItems();
  }

  dataStateChange(state: DataStateChangeEvent) {
    this.state = state;
    this.processTable();
  }

  private loadItems() {
    this.mechanicalService.GetMechanicalIntegrityList(1).subscribe(
      res => {
        this.data = res;
        this.processTable();
      }
    );
  }

  processTable() {
    this.gridView = process(this.data, this.state);
  }
}

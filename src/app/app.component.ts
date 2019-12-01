import { Component } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { HttpClient } from '@angular/common/http';
import { CellCustomComponent } from './cell-custom/cell-custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridApi: any;
  columnApi: any;

  columnDefs = [
    {
      headerName: 'Make',
      field: 'make',
      tooltipField: 'make',
      cellRendererFramework: CellCustomComponent,
    },
    {
      headerName: 'Model',
      field: 'model'
    },
    {
      headerName: 'Price',
      field: 'price'
    }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  modules = AllCommunityModules;

  constructor(private http: HttpClient) {

  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  onGetData() {
    this.http.get('../assets/data.json').subscribe(data => {
      this.gridApi.setRowData([]);
      const newData = data;
      this.gridApi.updateRowData({ add: newData });
    });
  }

  onClearData() {
    this.gridApi.setRowData([]);
  }

}

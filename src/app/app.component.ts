import { Component } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs = [
    {
      headerName: 'Make',
      field: 'make',
      tooltipField: 'make',
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
}

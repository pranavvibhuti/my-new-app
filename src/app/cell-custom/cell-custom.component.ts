import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.css']
})
export class CellCustomComponent implements OnInit {

  data: any;

  constructor() { }

  agInit(params) {
    this.data = params.value;
    console.log(this.data);
  }

  ngOnInit() {
  }

}

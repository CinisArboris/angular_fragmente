import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-dinamyc',
  templateUrl: './table-dinamyc.component.html',
  styleUrls: ['./table-dinamyc.component.css']
})
export class TableDinamycComponent implements OnInit {
  @Input() rowData: any[] = [];
  @Input() columnData: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}

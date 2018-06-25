import { Component, OnInit } from '@angular/core';
import { templateVisitAll } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  rows = [];

  selected = [];

  columns: any[] = [
    { prop: 'name'} ,
    { name: 'Company' },
    { name: 'Gender' },
    { id : 'Amount ' }

  ];
  constructor(private router: Router) {
    this.fetch((data) => {
      this.selected = [data];
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  detail(row: any) {
    this.router.navigateByUrl('invoice/' + row.id);
}
  onActivate(event) {
    console.log('Activate Event', event);
  }
  ngOnInit() {
  }
}


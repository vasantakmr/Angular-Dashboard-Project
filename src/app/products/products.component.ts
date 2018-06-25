import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class ProductsComponent implements OnInit {

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
    this.router.navigateByUrl('productdetails/' + row.id);
}
  onActivate(event) {
    console.log('Activate Event', event);
  }
  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

   product$: Object;

  constructor(private data: DataService, private route: ActivatedRoute ) {
    this.route.params.subscribe(params => this.product$ = params.id);
  }

  ngOnInit() {
    this.data.getProduct(this.product$).subscribe(
      data => this.product$ = data
    );
  }

}

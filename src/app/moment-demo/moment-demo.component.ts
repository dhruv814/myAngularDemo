import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment/moment';

@Component({
  selector: 'app-moment-demo',
  templateUrl: './moment-demo.component.html',
  styleUrls: ['./moment-demo.component.css']
})
export class MomentDemoComponent implements OnInit {

  constructor() { }
  date='';
  ngOnInit() {
    this.date = moment().format('MMMM Do YYYY');
  }

}

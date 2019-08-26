import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment/moment';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent implements OnInit {

  constructor() { }
  title = "helLO";
  todaydate = new Date();
  jsonval = { name: 'Alex', age: '25', address: { a1: 'Paris', a2: 'France' } };
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import * as moment from 'node_modules/moment/moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  time = '';
  ngOnInit() {
    this.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}

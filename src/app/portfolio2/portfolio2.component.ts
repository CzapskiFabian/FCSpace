import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-portfolio2',
  templateUrl: './portfolio2.component.html',
  styleUrls: ['./portfolio2.component.css']
})
export class Portfolio2Component implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  public ngAfterViewInit(): void {
    // $(".portfolio-container div").css("height", function (v) {
    //   return Math.random() * 250 + 100 | 0
    // });
  }
}

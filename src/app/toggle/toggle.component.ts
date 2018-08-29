import {Component, OnInit} from '@angular/core';
import {getLocaleTimeFormat} from '@angular/common';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  isActive = true;
  //logClicks = [];
  item1: any = 0;
  item2 = [];
  constructor() {}

  ngOnInit() {}
  activeToggle() {
    this.isActive = !this.isActive;
    this.item1 = this.item1 + 1;
    console.log(this.item1);
    console.log(this.item2);
    this.item2.push(this.item1);
  }
}

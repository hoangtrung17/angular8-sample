import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'a8-header',
  templateUrl: './demo-content.component.html',
  styleUrls: ['./demo-content.component.scss']
})
export class DemoContentComponent implements OnInit {
  @Input('contentTitle') contentTitle: string;
  constructor() { }

  ngOnInit() {
    this.contentTitle = this.contentTitle;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'easy-date',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input('titleInput') titleInput: string;
  constructor() { }

  ngOnInit() {
    this.titleInput = this.titleInput;

  }

}

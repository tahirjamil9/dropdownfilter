import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent implements OnInit {

  @Input() options: { name: string; checked: boolean }[] = [];
  @Output() selectionChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  removeItemFromList(value: any) {
    let index = this.options.findIndex((item) => item.name === value.name);
    this.options[index].checked = false;
    this.selectionChange.emit(value);
  }
}

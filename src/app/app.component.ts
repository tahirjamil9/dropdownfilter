import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list1: { name: string; checked: boolean }[] = [
    {
      name: 'value 01',
      checked: false,
    },
    {
      name: 'value 02',
      checked: false,
    },
    {
      name: 'value 03',
      checked: false,
    },
    {
      name: 'value 04',
      checked: false,
    },
    {
      name: 'value 05',
      checked: false,
    },
    {
      name: 'value 06',
      checked: false,
    },
    {
      name: 'value 07',
      checked: false,
    },
    {
      name: 'value 08',
      checked: false,
    },
  ];

  constructor() {}

  ngOnInIt() {}

  onSelectionChange1(value: any) {
    value.checked = !value.checked;
    let index = this.list1.findIndex((item) => item.name === value.name);
    this.list1[index].checked = value.checked;
  }

  removeItemFromList(value: any) {
    let index = this.list1.findIndex((item) => item.name === value.name);
    this.list1[index].checked = false;
  }
}

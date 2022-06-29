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

  selectedOptions1: { name: string; checked: boolean }[] = [];

  constructor() {}

  ngOnInIt() {}

  onSelectionChange1(value: any) {
    value.checked = !value.checked;
    if (value.checked) {
      this.selectedOptions1.push(value);
    } else {
      let index = this.selectedOptions1.findIndex(
        (item) => item.name === value.name
      );
      this.selectedOptions1.splice(index, 1);
    }
  }
}

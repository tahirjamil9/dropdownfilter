import { Component } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedChip = null;
  selected = true;
  data: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
  ];
  list: string[] = ['value 01', 'value 02', 'value 03'];
  selectedOptions: any = [];

  constructor() {}

  ngOnInIt() {
    this.list = this.data;
  }

  changeOptions(selectedItem: any) {
    this.selectedChip = selectedItem;
    setTimeout(() => {
      this.selectedChip = null;
    }, 800);
    switch (selectedItem) {
      case 'shoes': {
        this.list = ['shoes 1', 'shoes 2', 'shoes 3'];
        break;
      }
      case 'shirts': {
        this.list = ['shirts 1', 'shirts 2', 'shirts 3'];
        break;
      }
      case 'cats': {
        this.list = ['cat 1', 'cat 2', 'cat 3'];
        break;
      }
      default: {
        this.list.push(this.data[Math.floor(Math.random() * this.data.length)]);
        break;
      }
    }
  }

  onSelectionChange(item: any) {
    this.selectedOptions.push(item);
  }
}

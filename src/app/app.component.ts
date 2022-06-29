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
  list1: string[] = [
    'value 01',
    'value 02',
    'value 03',
    'value 04',
    'value 05',
    'value 06',
    'value 07',
    'value 08',
  ];
  list2: string[] = [
    'value 01',
    'value 02',
    'value 03',
    'value 04',
    'value 05',
    'value 06',
    'value 07',
    'value 08',
  ];
  list3: string[] = [
    'value 01',
    'value 02',
    'value 03',
    'value 04',
    'value 05',
    'value 06',
    'value 07',
    'value 08',
  ];
  selectedOptions1: any = [];
  selectedOptions2: any = [];
  selectedOptions3: any = [];

  constructor() {}

  ngOnInIt() {
    this.list1 = this.data;
    this.list2 = this.data;
    this.list3 = this.data;
  }

  changeOptions1(selectedItem: any) {
    this.selectedChip = selectedItem;
    setTimeout(() => {
      this.selectedChip = null;
    }, 800);
    switch (selectedItem) {
      case 'shoes': {
        this.list1 = ['shoes 1', 'shoes 2', 'shoes 3'];
        break;
      }
      case 'shirts': {
        this.list1 = ['shirts 1', 'shirts 2', 'shirts 3'];
        break;
      }
      case 'cats': {
        this.list1 = ['cat 1', 'cat 2', 'cat 3'];
        break;
      }
      default: {
        this.list1.push(
          this.data[Math.floor(Math.random() * this.data.length)]
        );
        break;
      }
    }
  }

  changeOptions2(selectedItem: any) {
    this.selectedChip = selectedItem;
    setTimeout(() => {
      this.selectedChip = null;
    }, 800);
    switch (selectedItem) {
      case 'shoes': {
        this.list2 = ['shoes 1', 'shoes 2', 'shoes 3'];
        break;
      }
      case 'shirts': {
        this.list2 = ['shirts 1', 'shirts 2', 'shirts 3'];
        break;
      }
      case 'cats': {
        this.list2 = ['cat 1', 'cat 2', 'cat 3'];
        break;
      }
      default: {
        this.list2.push(
          this.data[Math.floor(Math.random() * this.data.length)]
        );
        break;
      }
    }
  }

  changeOptions3(selectedItem: any) {
    this.selectedChip = selectedItem;
    setTimeout(() => {
      this.selectedChip = null;
    }, 800);
    switch (selectedItem) {
      case 'shoes': {
        this.list3 = ['shoes 1', 'shoes 2', 'shoes 3'];
        break;
      }
      case 'shirts': {
        this.list3 = ['shirts 1', 'shirts 2', 'shirts 3'];
        break;
      }
      case 'cats': {
        this.list3 = ['cat 1', 'cat 2', 'cat 3'];
        break;
      }
      default: {
        this.list3.push(
          this.data[Math.floor(Math.random() * this.data.length)]
        );
        break;
      }
    }
  }

  onSelectionChange1(item: any) {
    this.selectedOptions1.push(item);
  }
  onSelectionChange2(item: any) {
    this.selectedOptions2.push(item);
  }
  onSelectionChange3(item: any) {
    this.selectedOptions3.push(item);
  }
}

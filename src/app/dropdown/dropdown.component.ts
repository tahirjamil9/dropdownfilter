import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @Input() label: any = 'Select';
  @Input() iconLabel: any = 'expand_more';
  @Input() isBadgeDropdown: boolean = false;
  @Input() options: { name: string; checked: boolean }[] = [];
  @Output() selectionChange = new EventEmitter<any>();

  removeItemFromList(value: any) {
    let index = this.options.findIndex((item) => item.name === value.name);
    this.options[index].checked = false;
  }

  isDropdownActive = false;

  inside = false;
  some_text = 'Click Here';

  @HostListener('click')
  clicked() {
    this.inside = true;
  }

  @HostListener('document:click')
  clickedOut() {
    if (!this.inside) {
      this.isDropdownActive = false;
    }
    this.inside = false;
  }

  constructor() {}

  ngOnInit() {}

  onOptionSelect(item: any) {
    item.checked = !item.checked;
    this.selectionChange.emit(item);
  }

  onLabelClick() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  onOpenedChange(item: any) {
    this.isDropdownActive = item;
  }
}

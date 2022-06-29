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
  @Input() label: any = 'dropdown';
  @Input() options: any = [];
  @Output() selectionChange = new EventEmitter<any>();
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
    this.selectionChange.emit(item);
  }

  onLabelClick() {
    this.isDropdownActive = !this.isDropdownActive;
  }

  onOpenedChange(item: any) {
    this.isDropdownActive = item;
  }
}

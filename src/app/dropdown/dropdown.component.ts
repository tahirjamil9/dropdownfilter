import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  @ViewChild('matSelect', { static: true }) matSelect: any;
  @Input() label: any = 'dropdown';
  @Input() options: any = [];
  @Output() selectionChange = new EventEmitter<any>();
  isDropdownActive = false;

  constructor() {}

  ngOnInit() {}

  onOptionSelect(item: any) {
    this.selectionChange.emit(item);
  }

  onLabelClick() {
    this.matSelect.toggle();
  }

  onOpenedChange(item: any) {
    this.isDropdownActive = item;
  }
}

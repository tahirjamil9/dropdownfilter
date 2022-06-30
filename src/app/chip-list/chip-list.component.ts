import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent {
  @Input() options: any = [];
  @Output() remove = new EventEmitter<any>();
  @Output() click = new EventEmitter<any>();

  removeItemFromList(value: any) {
    this.remove.emit(value);
  }

  clickChip(value: any) {
    this.click.emit(value);
  }
}

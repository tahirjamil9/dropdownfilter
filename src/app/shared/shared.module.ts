import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatChipsModule],
  declarations: [DropdownComponent, ChipsComponent],
  exports: [DropdownComponent, ChipsComponent],
})
export class SharedModule {}

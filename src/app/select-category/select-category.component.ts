import { Component, EventEmitter, Output, Input } from '@angular/core';
import { categoryList } from '../models';
declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'select-category',
  templateUrl: 'select-category.component.html',
  styleUrls: ['select-category.component.css'],
  inputs: ['selectedValue'],
})
export class SelectCategoryComponent {
  selectedValue: string;

  @Input() categoryList: categoryList[];

  @Output()
  changeSelect: EventEmitter<number> = new EventEmitter();

  onChange(e) {
    this.changeSelect.emit(e.value);
  }
}

import { Component, EventEmitter, Output, Input } from '@angular/core';
import { elementList, categoryList } from '../models';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AbstractControl } from '@angular/forms';

declare var module: {
  id: string;
};

function selectedValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  let value = control.value;
  if (value != '0') {
    return null;
  }
  return { selected: false };
}

@Component({
  moduleId: module.id,
  selector: 'add-in-list',
  templateUrl: 'add-in-list.component.html',
  styleUrls: ['add-in-list.component.css'],
})
export class AddInListComponent {
  @Output()
  add: EventEmitter<elementList> = new EventEmitter();

  @Input() categoryList: categoryList[];

  constructor(private fb: FormBuilder) {}

  addElementForm: FormGroup;

  ngOnInit() {
    this.addElementForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required]],
      category: ['0', selectedValidator],
    });
  }

  onSubmit(form) {
    const elem: elementList = {
      ...form.value,
      id: Date.now(),
    };
    this.add.emit(elem);
  }
}

import { Component } from '@angular/core';
declare var module: {
  id: string;
};

@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css', '../app.component.css'],
})
export class AdminComponent {}

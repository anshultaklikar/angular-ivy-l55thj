import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hotreload';

  show: boolean = false;

  skills: string[] = ['Angular', 'React', 'Vue'];

  empData: any[] = [
    { id: 666, name: 'Raj', age: 44 },
    { id: 665, name: 'Raju', age: 43 },
    { id: 667, name: 'Raja', age: 42 },
  ];

  handleShow() {
    this.show = true;
  }
  handleHide() {
    this.show = false;
  }
  handleToggle() {
    this.show ? (this.show = false) : (this.show = true);
  }
}

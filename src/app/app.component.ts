import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.grid {display: grid; grid-template-columns: auto auto}', '.grid > * {border-top: 1px solid black}'],
})
export class AppComponent {
  title = 'angular-rxjs';
}

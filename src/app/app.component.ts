import { Component } from '@angular/core';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormBuilderComponent],
  template: '<app-form-builder></app-form-builder>',
})
export class AppComponent {
  title = 'docuseal-angular-example';
}
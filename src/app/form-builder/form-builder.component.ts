import { Component } from '@angular/core';
import { DocusealBuilderComponent } from '@docuseal/angular';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [DocusealBuilderComponent],
  template: '<docuseal-builder [token]="token"></docuseal-builder>',
  styles: ['']
})
export class FormBuilderComponent {
  token = 'PUT_JWT_HERE';
}

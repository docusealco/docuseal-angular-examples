import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DocusealFormComponent } from './docuseal-form/docuseal-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormBuilderComponent, DocusealFormComponent],
  template: `
    <nav>
      <button (click)="showDocusealForm()" [class.active]="activeComponent === 'signingForm'">Signing Form</button>
      <button (click)="showFormBuilder()" [class.active]="activeComponent === 'formBuilder'">Form Builder</button>
    </nav>
    <app-form-builder *ngIf="activeComponent === 'formBuilder'"></app-form-builder>
    <app-docuseal-form *ngIf="activeComponent === 'signingForm'"></app-docuseal-form>
  `,
  styles: [
    `
      nav {
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 5px;
        display: inline-block;
      }

      button {
        border: none;
        padding: 8px 15px;
        cursor: pointer;
        background-color: transparent;
        transition: background-color 0.3s ease;
        border-radius: 5px;
      }

      .active {
        background-color: #007bff;
        color: white;
      }
    `
  ]
})
export class AppComponent {
  title = 'docuseal-angular-example';
  activeComponent: 'formBuilder' | 'signingForm' = 'signingForm';

  showFormBuilder() {
    this.activeComponent = 'formBuilder';
  }

  showDocusealForm() {
    this.activeComponent = 'signingForm';
  }
}

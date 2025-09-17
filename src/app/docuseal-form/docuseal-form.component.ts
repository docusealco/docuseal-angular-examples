import { Component } from '@angular/core';
import { DocusealFormComponent as Docuseal } from '@docuseal/angular';

@Component({
  selector: 'app-docuseal-form',
  standalone: true,
  imports: [Docuseal],
  template: '<docuseal-form [src]="source"></docuseal-form>'
})
export class DocusealFormComponent {
  source = 'https://docuseal.com/d/LEVGR9rhZYf86M';
}

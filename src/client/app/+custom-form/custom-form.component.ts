import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'custom-form.component.html',
  styleUrls: ['custom-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CustomFormComponent {

}

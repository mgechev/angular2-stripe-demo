import { Component, NgZone } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sd-custom-form',
  templateUrl: 'custom-form.component.html',
  styleUrls: ['custom-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CustomFormComponent {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;

  message: string;

  constructor(private _zone: NgZone) {}

  getToken() {
    this.message = 'Loading...';

    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expiryMonth,
      exp_year: this.expiryYear,
      cvc: this.cvc
    }, (status: number, response: any) => {

      // Wrapping inside the Angular zone
      this._zone.run(() => {
        if (status === 200) {
          this.message = `Success! Card token ${response.card.id}.`;
        } else {
          this.message = response.error.message;
        }
      });
    });
  }
}


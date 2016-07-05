import { Component } from '@angular/core';
import { SafeHtml, DomSanitizationService } from '@angular/platform-browser';

const STRIPE_SCRIPT =
`
<form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_oi0sKPJYLGjdvOXOM8tE8cMa"
    data-amount="999"
    data-name="Demo Site"
    data-description="Widget"
    data-locale="auto">
  </script>
</form>
`;

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-stripe-form',
  templateUrl: 'stripe-form.component.html',
  styleUrls: ['stripe-form.component.css']
})
export class StripeFormComponent {
  stripeScript: SafeHtml;
  constructor(private sanitizer: DomSanitizationService) {
    this.stripeScript = sanitizer.bypassSecurityTrustHtml(STRIPE_SCRIPT);
  }
}


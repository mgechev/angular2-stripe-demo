import { Component, Renderer } from '@angular/core';
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
  globalListener: any;

  constructor(private sanitizer: DomSanitizationService, private renderer: Renderer) {
    this.stripeScript = sanitizer.bypassSecurityTrustHtml(STRIPE_SCRIPT);
  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    });

    this.globalListener = this.renderer.listenGlobal('window', 'popstate', () => {
      handler.close();
    });
  }

  ngOnDestroy() {
    this.globalListener();
  }
}


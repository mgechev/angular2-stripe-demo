import { provideRouter, RouterConfig } from '@angular/router';

import { StripeFormRoutes } from './+stripe-form/index';
import { CustomFormRoutes } from './+custom-form/index';

const routes: RouterConfig = [
  ...StripeFormRoutes,
  ...CustomFormRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];

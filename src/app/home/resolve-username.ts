import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { USERNAME_PATTERN } from '../access-rules';

// The router also restores this state when the current Home entry is refreshed.
export const resolveUsername: ResolveFn<string> = () => {
  const router = inject(Router);
  const username: unknown = router.currentNavigation()?.extras.state?.['username'];

  return typeof username === 'string' && USERNAME_PATTERN.test(username)
    ? username
    : new RedirectCommand(router.parseUrl('/login'), { replaceUrl: true });
};

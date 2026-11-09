import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular/lazy';
import { PIN_PATTERN, USERNAME_PATTERN } from '../access-rules';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly navigation = inject(NavController);

  readonly credentials = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(USERNAME_PATTERN)]],
    pin: ['', [Validators.required, Validators.pattern(PIN_PATTERN)]],
  });
  navigating = false;
  navigationError = false;

  async enter(): Promise<void> {
    if (this.navigating) return;
    this.navigationError = false;
    if (this.credentials.invalid) {
      this.credentials.markAllAsTouched();
      return;
    }

    this.navigating = true;
    const extras: NavigationExtras = {
      state: { username: this.credentials.controls.username.value },
      replaceUrl: true,
    };
    try {
      const entered = await this.navigation.navigateRoot(['/home'], extras);
      this.navigationError = !entered;
      if (entered) this.credentials.reset();
    } catch {
      this.navigationError = true;
    } finally {
      this.navigating = false;
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NavController } from '@ionic/angular/lazy';
import { vi } from 'vitest';

import { LoginPageModule } from './login.module';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  const navigateRoot = vi.fn(async () => true);

  beforeEach(async () => {
    navigateRoot.mockClear();
    await TestBed.configureTestingModule({
      imports: [LoginPageModule, RouterModule.forRoot([])],
      providers: [{ provide: NavController, useValue: { navigateRoot } }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it.each([
    ['ab', '1234'],
    ['abcdefgh9', '1234'],
    ['abc-3', '1234'],
    ['demo', '123'],
    ['demo', '12345'],
    ['demo', '12a4'],
  ])('keeps invalid access on Login (%s / %s)', async (username, pin) => {
    component.credentials.setValue({ username, pin });
    await component.enter();

    expect(component.credentials.invalid).toBe(true);
    expect(component.credentials.controls.username.touched).toBe(true);
    expect(component.credentials.controls.pin.touched).toBe(true);
    expect(navigateRoot).not.toHaveBeenCalled();
  });

  it.each(['a01', 'abcd1234'])('passes only a valid username (%s) and clears the PIN', async (username) => {
    component.credentials.setValue({ username, pin: '0042' });
    await component.enter();

    expect(navigateRoot).toHaveBeenCalledWith(['/home'], {
      state: { username },
      replaceUrl: true,
    });
    expect(component.credentials.controls.pin.value).toBe('');
  });
});

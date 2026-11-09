import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController, NavController } from '@ionic/angular/lazy';

const NON_BLANK = Validators.pattern(/\S/);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnDestroy {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly animationCtrl = inject(AnimationController);
  private readonly navigation = inject(NavController);
  readonly username: string = inject(ActivatedRoute).snapshot.data['username'];
  readonly today = new Date();
  readonly levels = ['Básica', 'Media', 'Técnica', 'Universitaria', 'Posgrado', 'Otra'];
  readonly alertButtons = ['Aceptar'];
  readonly details = this.fb.group({
    firstName: ['', [Validators.required, NON_BLANK]],
    lastName: ['', [Validators.required, NON_BLANK]],
    education: [''],
    birthDate: new FormControl<Date | null>(null),
  });
  summary = '';

  @ViewChild('homeTitle', { read: ElementRef, static: true }) private homeTitle!: ElementRef<HTMLElement>;
  @ViewChild('firstNameInput', { read: ElementRef, static: true }) private firstNameInput!: ElementRef<HTMLElement>;
  @ViewChild('lastNameInput', { read: ElementRef, static: true }) private lastNameInput!: ElementRef<HTMLElement>;
  @ViewChild(MatDatepicker, { static: true }) private datepicker!: MatDatepicker<Date>;

  private titleAnimation?: Animation;
  private clearAnimation?: Animation;

  ionViewDidEnter(): void {
    this.titleAnimation?.destroy();
    if (this.reducesMotion()) return;

    this.titleAnimation = this.animationCtrl.create()
      .addElement(this.homeTitle.nativeElement)
      .duration(460)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', 0, 1)
      .fromTo('transform', 'translateY(8px)', 'translateY(0)');
    void this.titleAnimation.play();
  }

  clear(): void {
    this.datepicker.close();
    this.details.reset();
    this.summary = '';
    this.clearAnimation?.destroy();
    if (this.reducesMotion()) return;

    this.clearAnimation = this.animationCtrl.create()
      .addElement([this.firstNameInput.nativeElement, this.lastNameInput.nativeElement])
      .duration(1000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('transform', 'translateX(-16px)', 'translateX(0)');
    void this.clearAnimation.play();
  }

  show(): void {
    if (this.details.invalid) {
      this.details.markAllAsTouched();
      return;
    }

    const { firstName, lastName } = this.details.getRawValue();
    this.summary = `Su nombre es ${firstName.trim()} ${lastName.trim()}.`;
  }

  leave(): void {
    void this.navigation.navigateRoot(['/login'], { replaceUrl: true });
  }

  ngOnDestroy(): void {
    this.titleAnimation?.destroy();
    this.clearAnimation?.destroy();
  }

  private reducesMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}

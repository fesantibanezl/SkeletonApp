import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { vi } from 'vitest';

import { HomePageModule } from './home.module';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageModule, RouterModule.forRoot([])],
      providers: [{
        provide: ActivatedRoute,
        useValue: { snapshot: { data: { username: 'Demo07' } } },
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => vi.restoreAllMocks());

  it('renders the username from the route and prepares the requested name summary', () => {
    expect(fixture.nativeElement.querySelector('.welcome strong').textContent).toBe('Demo07');

    component.details.patchValue({ firstName: '  Ana María ', lastName: ' Díaz ' });
    component.show();

    expect(component.summary).toBe('Su nombre es Ana María Díaz.');
  });

  it('keeps the summary closed if the name only contains spaces', () => {
    component.details.patchValue({ firstName: '   ', lastName: 'Díaz' });
    component.show();

    expect(component.summary).toBe('');
    expect(component.details.controls.firstName.touched).toBe(true);
  });

  it('clears all four fields and the summary while respecting reduced motion', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ ...window.matchMedia(''), matches: true });
    component.details.setValue({
      firstName: 'Ana',
      lastName: 'Díaz',
      education: 'Media',
      birthDate: new Date(2003, 1, 2),
    });
    component.show();
    component.clear();

    expect(component.details.getRawValue()).toEqual({
      firstName: '',
      lastName: '',
      education: '',
      birthDate: null,
    });
    expect(component.summary).toBe('');
  });
});

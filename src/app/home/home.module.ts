import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular/lazy';
import { SectionCardComponent } from '../shared/section-card.component';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

function datepickerLabels(): MatDatepickerIntl {
  return Object.assign(new MatDatepickerIntl(), {
    calendarLabel: 'Calendario',
    openCalendarLabel: 'Abrir calendario',
    closeCalendarLabel: 'Cerrar calendario',
    prevMonthLabel: 'Mes anterior',
    nextMonthLabel: 'Mes siguiente',
    prevYearLabel: 'Año anterior',
    nextYearLabel: 'Año siguiente',
    prevMultiYearLabel: 'Período anterior',
    nextMultiYearLabel: 'Período siguiente',
    switchToMonthViewLabel: 'Elegir día',
    switchToMultiYearViewLabel: 'Elegir año y mes',
  });
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    SectionCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-CL' },
    { provide: MatDatepickerIntl, useFactory: datepickerLabels },
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

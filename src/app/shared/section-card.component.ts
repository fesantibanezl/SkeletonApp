import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-card',
  standalone: true,
  template: `
    <section class="surface">
      <h2>{{ heading() }}</h2>
      <ng-content></ng-content>
    </section>
  `,
  styles: `
    :host { display: block; }
    .surface {
      padding: clamp(1.125rem, 4vw, 1.75rem);
      border: 1px solid var(--app-line);
      border-radius: 1.25rem;
      background: var(--app-surface);
      box-shadow: 0 12px 30px rgb(37 55 99 / 7%);
    }
    h2 {
      margin: 0 0 .375rem;
      font-size: 1.25rem;
      font-weight: 720;
      letter-spacing: -.02em;
    }
  `,
})
export class SectionCardComponent {
  readonly heading = input.required<string>();
}

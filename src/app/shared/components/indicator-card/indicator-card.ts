import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-indicator-card',
  styleUrl: './indicator-card.scss',
  templateUrl: './indicator-card.html',
})
export class IndicatorCard {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
}
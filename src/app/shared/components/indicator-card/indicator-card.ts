import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-indicator-card',
  styleUrl: './indicator-card.scss',
  templateUrl: './indicator-card.html',
})
export class IndicatorCard {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly selected = output<void>();
  
  protected selectCard(): void {
   this.selected.emit();
 }
}
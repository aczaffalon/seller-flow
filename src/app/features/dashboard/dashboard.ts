import { Component, signal } from '@angular/core';
import { IndicatorCard } from '../../shared/components/indicator-card/indicator-card';

@Component({
  imports: [IndicatorCard],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly pageTitle = 'Dashboard';
  protected readonly pageDescription =
    'Acompanhe os principais indicadores da operação.';
  protected readonly indicators = [
    {
        label: 'Vendedores ativos',
        value: '128',
      },
      {
        label: 'Transações hoje',
        value: '1.842',
      },
      {
        label: 'Volume processado',
        value: 'R$ 284.500',
      },
    ];
    
  protected readonly showWelcomeMessage = signal(false);

  protected toggleWelcomeMessage(): void {
  this.showWelcomeMessage.update((currentValue) => !currentValue);
}
  protected readonly isActionDisabled = signal(false);

  protected toggleActionState(): void {
    this.isActionDisabled.update((currentValue) => !currentValue);
}
}
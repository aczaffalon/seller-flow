import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected readonly pageTitle = 'Dashboard';
  protected readonly pageDescription =
    'Acompanhe os principais indicadores da operação.';
    
  protected readonly showWelcomeMessage = signal(false);

  protected toggleWelcomeMessage(): void {
  this.showWelcomeMessage.update((currentValue) => !currentValue);
}
}
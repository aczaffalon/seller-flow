import { Component } from '@angular/core';

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
}
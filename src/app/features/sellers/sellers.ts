import { Component, computed, signal } from '@angular/core';
import { Seller } from './models/seller';

@Component({
  imports: [],
  selector: 'app-sellers',
  styleUrl: './sellers.scss',
  templateUrl: './sellers.html',
})
export class Sellers {
  protected readonly sellers: Seller[] = [
  {
    id: 1,
    name: 'Ana Souza',
    email: 'ana.souza@example.com',
    status: 'active',
    transactionVolume: 12450,
  },
  {
    id: 2,
    name: 'Carlos Lima',
    email: 'carlos.lima@example.com',
    status: 'inactive',
    transactionVolume: 8300,
  },
  {
    id: 3,
    name: 'Mariana Costa',
    email: 'mariana.costa@example.com',
    status: 'active',
    transactionVolume: 19780,
  },
];
protected readonly searchTerm = signal('');
protected readonly filteredSellers = computed(() => {
  const term = this.searchTerm().trim().toLowerCase();

  if (!term) {
    return this.sellers;
  }

  return this.sellers.filter((seller) => {
    const name = seller.name.toLowerCase();
    const email = seller.email.toLowerCase();


    return name.includes(term) || email.includes(term);
  });
});
protected updateSearchTerm(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.searchTerm.set(input.value);
}
}
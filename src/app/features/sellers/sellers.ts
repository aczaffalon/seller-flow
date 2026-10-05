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
protected readonly statusFilter = signal<'all' | Seller['status']>('all');
protected readonly filteredSellers = computed(() => {
  const term = this.searchTerm().trim().toLowerCase();
  const status = this.statusFilter();

  return this.sellers.filter((seller) => {
    const matchesSearch =
      !term ||
      seller.name.toLowerCase().includes(term) ||
      seller.email.toLowerCase().includes(term);

    const matchesStatus =
      status === 'all' || seller.status === status;

    return matchesSearch && matchesStatus;
  });
});
protected updateSearchTerm(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.searchTerm.set(input.value);
}
protected updateStatusFilter(event: Event): void {
  const select = event.target as HTMLSelectElement;

  this.statusFilter.set(
    select.value as 'all' | Seller['status'],
  );
}
}
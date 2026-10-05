export interface Seller {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  transactionVolume: number;
}
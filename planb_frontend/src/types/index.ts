export type Role = 'DRIVER' | 'CAR_OWNER' | 'CORPORATE' | 'CAR_HIRE' | 'ADMIN';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: Role;
  phone_number: string | null;
  has_paid_registration: boolean;
}

export interface Car {
  id: number;
  owner: number;
  make: string;
  model: string;
  year: number;
  description: string;
  status: 'AVAILABLE' | 'IN_USE' | 'MAINTENANCE';
  internal_budget: string;
}

export interface JobPosting {
  id: number;
  client: number;
  title: string;
  description: string;
  date_needed: string;
  hours_needed: number;
  status: 'OPEN' | 'ASSIGNED' | 'COMPLETED' | 'CANCELLED';
}

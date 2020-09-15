import { StoreConfig } from '@ngrx/store';

export interface ProfileResponse {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  password?: string;
  repassword?: string;
}

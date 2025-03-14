export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    authorities: string[];
    balance: number;
    locked: boolean;
    enabled: boolean;
  }
  
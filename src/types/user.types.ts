export interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'Inactive' | 'Pending' | 'Blacklisted' | 'Active';
  id: string;

  bank_name: string;
  bank_number: string;
  wallet_balance: number;
}

export interface UserRow extends User {
  handleViewDetails: (row: UserRow) => void;
}

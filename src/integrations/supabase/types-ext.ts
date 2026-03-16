export type RSVPResponse = {
  id?: string;
  name: string;
  phone: string;
  attending: boolean;
  guests_count: number;
  observations?: string | null;
  created_at?: string;
};

export type GuestMessage = {
  id?: string;
  name: string;
  message: string;
  approved?: boolean;
  created_at?: string;
};

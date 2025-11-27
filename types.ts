export interface TripDetails {
  flightNumber?: string;
  hotelName?: string;
  address?: string;
  modalContent?: string;
  showTime?: string;
}

export interface Recommendation {
  name: string;
  address: string;
  mapLink: string;
}

export interface Activity {
  timeLabel: string;
  icon: string;
  title: string;
  subtitle?: string;
  meal?: string;
  accommodation?: string;
  details?: TripDetails;
  mapLink?: string;
  recommendations?: Recommendation[];
}

export interface DayItinerary {
  day: number;
  dateName: string;
  location: string;
  activities: Activity[];
}

export interface TripData {
  tripName: string;
  days: DayItinerary[];
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}
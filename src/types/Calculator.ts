export interface RenovationItem {
  id: string;
  name: string;
  cost: number;
  defaultCost: number;
}

export interface RenovationCategory {
  id: string;
  name: string;
  items: RenovationItem[];
  icon: string;
}

export interface RenovationState {
  categories: RenovationCategory[];
}
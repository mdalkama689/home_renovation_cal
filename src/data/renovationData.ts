import { RenovationCategory } from '../types/Calculator';
import { Paintbrush, Bath, Twitch as Kitchen, Sofa, HomeIcon, LampFloor, PanelTop, DoorOpen, Plus } from 'lucide-react';

export const renovationData: RenovationCategory[] = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    icon: 'Kitchen',
    items: [
      { id: 'kitchen-cabinets', name: 'Cabinets', cost: 150000, defaultCost: 150000 },
      { id: 'kitchen-countertops', name: 'Countertops', cost: 75000, defaultCost: 75000 },
      { id: 'kitchen-appliances', name: 'Appliances', cost: 200000, defaultCost: 200000 },
      { id: 'kitchen-flooring', name: 'Flooring', cost: 60000, defaultCost: 60000 },
      { id: 'kitchen-plumbing', name: 'Plumbing', cost: 45000, defaultCost: 45000 },
    ],
  },
  {
    id: 'bathroom',
    name: 'Bathroom',
    icon: 'Bath',
    items: [
      { id: 'bathroom-shower', name: 'Shower/Tub', cost: 75000, defaultCost: 75000 },
      { id: 'bathroom-toilet', name: 'Toilet', cost: 15000, defaultCost: 15000 },
      { id: 'bathroom-vanity', name: 'Vanity', cost: 35000, defaultCost: 35000 },
      { id: 'bathroom-flooring', name: 'Flooring', cost: 40000, defaultCost: 40000 },
      { id: 'bathroom-fixtures', name: 'Fixtures', cost: 25000, defaultCost: 25000 },
    ],
  },
  {
    id: 'living',
    name: 'Living Room',
    icon: 'Sofa',
    items: [
      { id: 'living-flooring', name: 'Flooring', cost: 90000, defaultCost: 90000 },
      { id: 'living-paint', name: 'Paint', cost: 25000, defaultCost: 25000 },
      { id: 'living-lighting', name: 'Lighting', cost: 35000, defaultCost: 35000 },
      { id: 'living-trim', name: 'Trim Work', cost: 45000, defaultCost: 45000 },
    ],
  },
  {
    id: 'exterior',
    name: 'Exterior',
    icon: 'HomeIcon',
    items: [
      { id: 'exterior-siding', name: 'Siding', cost: 250000, defaultCost: 250000 },
      { id: 'exterior-roof', name: 'Roof', cost: 350000, defaultCost: 350000 },
      { id: 'exterior-windows', name: 'Windows', cost: 180000, defaultCost: 180000 },
      { id: 'exterior-doors', name: 'Doors', cost: 60000, defaultCost: 60000 },
      { id: 'exterior-landscaping', name: 'Landscaping', cost: 150000, defaultCost: 150000 },
    ],
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: 'Paintbrush',
    items: [
      { id: 'painting-interior', name: 'Interior', cost: 100000, defaultCost: 100000 },
      { id: 'painting-exterior', name: 'Exterior', cost: 150000, defaultCost: 150000 },
      { id: 'painting-trim', name: 'Trim', cost: 35000, defaultCost: 35000 },
    ],
  },
  {
    id: 'flooring',
    name: 'Flooring',
    icon: 'PanelTop',
    items: [
      { id: 'flooring-hardwood', name: 'Hardwood', cost: 165000, defaultCost: 165000 },
      { id: 'flooring-tile', name: 'Tile', cost: 115000, defaultCost: 115000 },
      { id: 'flooring-carpet', name: 'Carpet', cost: 65000, defaultCost: 65000 },
      { id: 'flooring-vinyl', name: 'Vinyl/Laminate', cost: 55000, defaultCost: 55000 },
    ],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: 'LampFloor',
    items: [
      { id: 'furniture-living', name: 'Living Room', cost: 120000, defaultCost: 120000 },
      { id: 'furniture-dining', name: 'Dining Room', cost: 75000, defaultCost: 75000 },
      { id: 'furniture-bedroom', name: 'Bedroom', cost: 90000, defaultCost: 90000 },
    ],
  },
  {
    id: 'doors',
    name: 'Doors & Windows',
    icon: 'DoorOpen',
    items: [
      { id: 'doors-interior', name: 'Interior Doors', cost: 35000, defaultCost: 35000 },
      { id: 'doors-exterior', name: 'Exterior Doors', cost: 75000, defaultCost: 75000 },
      { id: 'windows-standard', name: 'Standard Windows', cost: 135000, defaultCost: 135000 },
      { id: 'windows-custom', name: 'Custom Windows', cost: 225000, defaultCost: 225000 },
    ],
  },
  {
    id: 'other',
    name: 'Other',
    icon: 'Plus',
    items: [
      { id: 'other-1', name: 'Custom Item 1', cost: 0, defaultCost: 0 },
      { id: 'other-2', name: 'Custom Item 2', cost: 0, defaultCost: 0 },
      { id: 'other-3', name: 'Custom Item 3', cost: 0, defaultCost: 0 },
    ],
  },
];

export const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Kitchen':
      return Kitchen;
    case 'Bath':
      return Bath;
    case 'Sofa':
      return Sofa;
    case 'HomeIcon':
      return HomeIcon;
    case 'Paintbrush':
      return Paintbrush;
    case 'PanelTop':
      return PanelTop;
    case 'LampFloor':
      return LampFloor;
    case 'DoorOpen':
      return DoorOpen;
    case 'Plus':
      return Plus;
    default:
      return HomeIcon;
  }
};
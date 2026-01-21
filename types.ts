
export interface Kitten {
  id: string;
  name: string;
  gender: 'male' | 'female';
  status: 'available' | 'reserved' | 'sold';
  color: string;
  birthDate: string;
  description: string;
  priceClass: 'show' | 'pet';
  image: string;
  parameters: {
    ears: string;
    coat: string;
    character: string;
  };
}

export interface Parent {
  id: string;
  name: string;
  gender: 'male' | 'female';
  titles: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export enum BreedFeature {
  EARS = "Космические уши",
  COAT = "Велюровая шерсть",
  CHARACTER = "Характер эльфа"
}

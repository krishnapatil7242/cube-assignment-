export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Customer {
  id: string;
  name: string;
  title: string;
  address: Address;
}

export interface Photo {
  id: string;
  url: string;
}
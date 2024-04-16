import React from 'react';
import { Customer, Photo } from '../types';

interface CustomerDetailsProps {
  customer: Customer;
  photos: Photo[];
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, photos }) => {
  // Check if photos is an array
  if (!Array.isArray(photos)) {
    console.error('Invalid photos data:', photos);
    return null; // Or render an error message or placeholder
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <div className="address">
        <p>{customer.address.street}</p>
        <p>{customer.address.suite}</p>
        <p>{customer.address.city}</p>
        <p>{customer.address.zipcode}</p>
      </div>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={`Photo ${photo.id}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;

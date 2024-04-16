import React, { useState, useEffect } from 'react';
import { fetchCustomers, fetchPhotos } from './api';
import { Customer, Photo } from './types';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Fetch customers from the public API (e.g., JsonPlaceholder)
    const fetchCustomersData = async () => {
      const customers = await fetchCustomers();
      setCustomers(customers);
    };
    fetchCustomersData();
  }, []);

  useEffect(() => {
    // Fetch photos from the Unsplash API and update them every 10 seconds
    const fetchPhotosData = async () => {
      try {
        const photos = await fetchPhotos();
        setPhotos(photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchPhotosData();
    const interval = setInterval(fetchPhotosData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="app">
      <CustomerList customers={customers} selectedCustomer={selectedCustomer} onCustomerSelect={handleCustomerSelect} />
      {selectedCustomer && <CustomerDetails customer={selectedCustomer} photos={photos} />}
    </div>
  );
};

export default App;
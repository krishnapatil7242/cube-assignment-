import React from 'react';
import { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onCustomerSelect: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomer, onCustomerSelect }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`customer-card ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
          onClick={() => onCustomerSelect(customer)}
        >
          <h3>{customer.name}</h3>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
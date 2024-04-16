import axios, { AxiosError } from 'axios';
import { Customer, Photo } from './types';

const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';

export const fetchCustomers = async (): Promise<Customer[]> => {
  // Fetch customers from a public API (e.g., JsonPlaceholder)
  const response = await axios.get<Customer[]>('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

export const fetchPhotos = async (): Promise<Photo[]> => {
  try {
    // Fetch photos from the Unsplash API
    const response = await axios.get<{ results: Photo[] }>(`https://api.unsplash.com/search/photos?query=random&per_page=9&client_id=${UNSPLASH_ACCESS_KEY}`);
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        console.error('Unsplash API key is not valid or has not been configured properly.');
      } else {
        console.error('Error fetching photos:', axiosError.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};
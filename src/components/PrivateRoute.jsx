import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ children }) => {
  return !auth ? <Navigate to="/" /> : children;
};

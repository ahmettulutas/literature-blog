
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

// Typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
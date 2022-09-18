import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { IRootState } from './store';

// Typed useSelector
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
import { createContext } from 'react';
import { Me } from './interfaces';

export const MeContext = createContext<Me | null>(null);

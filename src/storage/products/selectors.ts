import { RootState } from '../types';
import { sliceName } from './products-slice';

export const getProducts = (state: RootState) => state[sliceName].data;
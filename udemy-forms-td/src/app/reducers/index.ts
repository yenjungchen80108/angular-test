import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from '../cart/cart.reducer';

export const reducers: ActionReducerMap<any> = {
    cart: cartReducer
};

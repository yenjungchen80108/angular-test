import * as actions from './cart.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// main data interface
export interface Product {
    id: string;
    size: string;
    price: number;
}

// entity adapter
export const cartAdapter = createEntityAdapter<Product>();
export interface State extends EntityState<Product> {}

// initial data
const defaultProduct = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            size: 'small',
            price: 100,
        }
    }
};

export const initialState: State = cartAdapter.getInitialState(defaultProduct);
// reducers
export function cartReducer(
    state: State = initialState,
    action: actions.ProductActions) {
        switch (action.type) {
            case actions.CREATE:
                return cartAdapter.addOne(action.cart, state);
            case actions.UPDATE:
                return cartAdapter.updateOne({
                    id: action.id,
                    changes: action.changes,
                }, state);
            case actions.DELETE:
                return cartAdapter.removeOne(action.id, state);
            default:
                return state;
    }
}

// create default selectors
export const getProductState = createFeatureSelector<State>('cart');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = cartAdapter.getSelectors(getProductState);

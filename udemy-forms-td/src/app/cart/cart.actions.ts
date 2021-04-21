import { Action } from '@ngrx/store';
import { Product } from './cart.reducer';

export const CREATE = '[Product] Create';
export const UPDATE = '[Product] Update';
export const DELETE = '[Product] Delete';

export class Create implements Action {
    readonly type = CREATE;
    constructor(public cart: Product) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Product>,
    ) {}
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type ProductActions
= Create
| Update
| Delete;

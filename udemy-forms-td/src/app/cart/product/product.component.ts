import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import * as actions from '../cart.actions';
import * as fromCart from '../cart.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css', '../../app.component.css']
})
export class ProductComponent implements OnInit {

  products: Observable<any>;

  constructor(private store: Store<fromCart.State>) { }

  ngOnInit() {
    this.products = this.store.select(fromCart.selectAll);
    // checking if we could successfully get products data
    const item = new Observable((observer: Observer<any>) => {
      observer.next('test1');
      observer.next('test2');
      // observer.complete();
    });
    const itemSubscription = item.subscribe((res) => {
      console.log(res);
      setTimeout(() => {
        itemSubscription.unsubscribe();
      }, 5000);
    });

    this.store.select(fromCart.selectAll).subscribe({
      next: function(value) {
        console.log(value);
      },
      error: function(error) {
        console.log(error);
      },
      complete: function() {
        console.log('complete');
      }
    });
  }

  createProduct() {
    const product: fromCart.Product = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small',
      price: 100
    };
    this.store.dispatch(new actions.Create(product));
  }

  updateProduct(id, size) {
    this.store.dispatch(new actions.Update(id, {size: size}));
  }

  deleteProduct(id) {
    this.store.dispatch(new actions.Delete(id));
  }

}

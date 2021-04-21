import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GiftComponent } from './gift/gift.component';
import { ProductComponent } from './cart/product/product.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartModule } from './cart/cart.module';
// import { SharedModule } from './shared.module';

import { reducers } from './reducers';
import { EntityPipe } from './entity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GiftComponent,
    ProductComponent,
    EntityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    CartModule,
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

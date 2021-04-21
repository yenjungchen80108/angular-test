import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './cart/product/product.component';

@NgModule({
declarations: [
    ProductComponent
],
imports: [
    CommonModule
],
exports: [
    ProductComponent
],
providers: [
    ProductComponent
]
})
export class SharedModule {}

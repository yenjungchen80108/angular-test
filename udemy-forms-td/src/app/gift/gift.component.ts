import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css', '../app.component.css']
})
export class GiftComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm; // get access to local element
  answer = '';
  giftoptions = [{
    id: 0,
    value: 'gift-box',
    name: '$100 Gift Wrapping Box',
    price: 100
    }, {
    id: 1,
    value: 'gift-kit',
    name: '$150 DIY Wrapping KIT',
    price: 150
    }
  ];
  receipt = false;
  user = {
    username: '',
    email: '',
    giftOption: '',
    answer: '',
    addReceipt: 'No',
    total: 100
  };
  submitted = false;
  displayed = true;

  suggestUserName() {
    const suggestedName = 'Jane Doe';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.displayed = false;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.giftOption = this.signupForm.value.giftData.giftoption;
    this.user.answer = this.signupForm.value.giftData.questionAnswer;
    this.user.addReceipt = (this.signupForm.value.giftData.receipt ? 'Yes' : 'No');
    // tslint:disable-next-line: radix
    this.user.total = parseInt(this.signupForm.value.giftData.giftoption.substring(1));
  }

  onReset() {
    this.signupForm.form.reset();
    this.displayed = true;
  }

  onEdit() {
    this.displayed = true;
    this.signupForm.form.markAsPristine();
  }

  filterData() {
    this.receipt = !this.receipt;
  }

  ngOnInit(): void {
  }
}

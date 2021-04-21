import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { NgForm } from '@angular/forms';
// import { Title } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gift Wrapping Section';

  public constructor(private titleService: Title) {
    this.titleService.setTitle('Gift Section');
  }
}

import { Component,
  ElementRef, 
  Input, 
  OnChanges, 
  OnInit,
  SimpleChanges, 
  ViewEncapsulation,
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ContentChild,
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, 
OnChanges, 
DoCheck,  
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
// allow parent component to use the child element
@Input('srvElement') element: [{type: string, name: string, content: string}];
@Input() name: string;
// allow child to refer to their own properties and method
@ViewChild('heading') header: ElementRef;
// allow parent to refer to the child
@ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('text content:' + this.header.nativeElement.textContent);
    console.log('text content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // gets called whenever any changes occurred
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
    console.log('test content' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }
}

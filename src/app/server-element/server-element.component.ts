import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild, DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('cons called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchange called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('onng called!');
    console.log('null here' + this.header.nativeElement.textContent);
    console.log('null here2' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngdocheck called!!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!!!');
    console.log('null here3' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!!!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!!!');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!!!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!!!');
  }

}

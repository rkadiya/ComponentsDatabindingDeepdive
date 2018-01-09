import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incNum = new EventEmitter<{count: number}>();
  count = 0;
  id: any;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
      this.id = setInterval(() => {
        this.incNum.emit({count: this.count++});
      }, 1000);
  }

  onGameEnd() {
    clearInterval(this.id);
  }
}

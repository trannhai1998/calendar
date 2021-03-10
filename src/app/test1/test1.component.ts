import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  constructor() { 
  }
  currentStage = 4;
  stages = [
    "Initiation & scope",
    "Specifications",
    "RFP response",
    "Active projects",
    "Demobilization",
    "Ongoing maintenance",
    "Closed"
  ]
  changeState(state: number){
    if (state !== this.currentStage){
      this.currentStage = state 
    }
    return;
  }

}

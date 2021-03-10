import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: "auto",
    dayCellClassNames: "calendar-daycell",
    aspectRatio: 1.2,
    viewClassNames: "calendar",
    buttonText: {
      today: ""
    },
    eventMinHeight: 0,
    weekends: true,
    events: {
      backgroundColor: "#ffd24a",
      
      events: [
        { title: 'Event 1', date: '2021-03-11' },
        { title: 'Event 2', date: '2021-03-13' }
      ]
    }
    
  };
  ngOnInit(): void {
  }

}

import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Event } from '../entities/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  @Output() eventClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventDeleted: EventEmitter<any> = new EventEmitter<any>() ;

  constructor() { }

  ngOnInit(): void {
  }
  editEvent(eventId: string): void {
    this.eventClicked.emit(eventId);
  }

  deleteEvent(eventId: number): void{
    this.eventDeleted.emit(eventId);
  }
}

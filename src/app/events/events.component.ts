import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Event} from '../entities/Event';
import { EventsActions } from '../store/actions/EventActions';
import { AppState } from '../store/Store';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public events: Event[];
  public search: string = '';

  constructor(private router: Router, private tempDataService: DataService,
    private ngRedux: NgRedux<AppState>, private eventActions: EventsActions) { }

  ngOnInit(): void {
    this.eventActions.readEvents();

    this.ngRedux.select(state => state.events).subscribe(res => {
      this.events = res.events;
    });
  }
  editEvent(eventId: any) {
    this.router.navigate(['neweditevent', {id: eventId}])
  }
  deleteEvent(eventId: any) {
    this.eventActions.deleteEvent(eventId);
  }
}

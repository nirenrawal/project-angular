import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { EventsActions } from '../store/actions/EventActions';
import { AppState } from '../store/Store';
import { Event } from '../entities/Event';


@Component({
  selector: 'app-neweditevent',
  templateUrl: './neweditevent.component.html',
  styleUrls: ['./neweditevent.component.scss']
})
export class NewediteventComponent implements OnInit {
  public selectedEvent: Event;
  public eventForm: FormGroup;
  public headerTitle: String = 'Create New Event';
  public editMode: boolean = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private eventsActions: EventsActions, private dataService: DataService, private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {
    const eventId: string = this.route.snapshot.paramMap.get('id');
    console.log(eventId);
    if (eventId != null) {
      this.headerTitle = "Edit Event";
      this.editMode = true;
    }

    this.ngRedux.select(state => state.events).subscribe(res => {
      this.selectedEvent = res.events.find(event => event.eventId === eventId);
    });

    if (this.selectedEvent === undefined) {
      this.selectedEvent = new Event();
    }

    this.eventForm = this.fb.group({
      eventName: [this.selectedEvent.eventName, Validators.required],
      startTime: [this.selectedEvent.startTime, Validators.required],
      endTime: [this.selectedEvent.endTime, Validators.required],
      location: [this.selectedEvent.location, Validators.required],
      status: [this.selectedEvent.status, Validators.required]
    });
  }

  onSubmitEvent() {
    // console.log(this.eventForm);

    if (this.eventForm.valid) {
      if (!this.editMode) {
        this.selectedEvent = this.eventForm.value;
        this.selectedEvent.createdDate = new Date();
        this.eventsActions.addEvent(this.selectedEvent);
      }else {
        this.selectedEvent.eventName = this.eventForm.value.eventName;
        this.selectedEvent.startTime = this.eventForm.value.startTime;
        this.selectedEvent.endTime = this.eventForm.value.endTime;
        this.selectedEvent.location = this.eventForm.value.location;
        this.selectedEvent.status = this.eventForm.value.status;

        this.eventsActions.updateEvent(this.selectedEvent.eventId, this.selectedEvent);
      }
      this.router.navigate(['events']);
    }
  }
}



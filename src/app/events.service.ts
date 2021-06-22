import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppState } from './store/Store';
import { Event } from './entities/Event';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends ApiService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<AppState>) { 
    super();
  }

  saveEvent(event: Event) {
    const token = this.ngRedux.getState().users.token;
    const url = "https://kvalifik-5b69b-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=" + token;
    return this.http.post(url, event, this.getHttpOptions());
  }
  
  readEvents() {
    const token = this.ngRedux.getState().users.token;
    const url = "https://kvalifik-5b69b-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=" + token;
    return this.http.get(url, this.getHttpOptions());
  }

   updateEvent(eventId :string , event: Event) {
    const token = this.ngRedux.getState().users.token;
    const url = "https://kvalifik-5b69b-default-rtdb.europe-west1.firebasedatabase.app/events/" + eventId + "/.json?auth=" + token;
     return this.http.put(url, event,  this.getHttpOptions());
   }

  deleteEvent(eventId : string){
    console.log(eventId);
    const token = this.ngRedux.getState().users.token;
    const url = "https://kvalifik-5b69b-default-rtdb.europe-west1.firebasedatabase.app/events/" + eventId + "/.json?auth=" + token;
    return this.http.delete(url, this.getHttpOptions());
  }
}

import { tassign } from 'tassign';
import { EventState } from '../Store';
import { EventsActions } from '../actions/EventActions';
import { Event } from 'src/app/entities/Event';

export let events = [
      {eventId :'1',eventName :'Euro Cup',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Søborg, Copenhagen',status:'published'} as Event,
      {eventId :'2',eventName :'Autumn Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Lyngby, Copenhagen',status:'published'} as Event,
      {eventId :'3',eventName :'Spring Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Valby, Copenhagen',status:'published'} as Event,
      {eventId :'4',eventName :'Nothing Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Nørrebro, Copenhagen',status:'published'} as Event,
      {eventId :'5',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Lygten, Copenhagen',status:'published'} as Event
  ];

  const EVENT_INITIAL_STATE: EventState = {events: events};

export function eventsReducer(state: EventState = EVENT_INITIAL_STATE, action: any) {
  switch (action.type) {
    case EventsActions.ADD_EVENT:
      return tassign(state, {events: [...state.events, action.payload]});

    case EventsActions.READ_EVENTS:
      return tassign(state, {events: action.payload});

    case EventsActions.UPDATE_EVENT:
      console.log("i am update event");
      const newArray = [...state.events];
      const index = state.events.findIndex(event => event.eventId === action.payload.eventId);
      newArray[index] = action.payload;
      console.log("Action payload" + action.payload);
      return tassign(state, {events: newArray});

    case EventsActions.DELETE_EVENT:        
      return tassign(state, {events: state.events.filter(event => event.eventId !== action.payload)});

    default:
    return state;
  }
}
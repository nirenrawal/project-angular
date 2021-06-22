import { Injectable } from '@angular/core';
import { Post } from './entities/Post';
import {Event}  from './entities/Event';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private posts: Post[] = [
    {id: '1', createdDate: new Date(2021, 0, 2), title: 'Is there life out there', text: 'Something' } as Post,
    {id: '2', createdDate: new Date(2021, 1, 2), title: 'Do androids dream of electric sheep?', text: 'Something' } as Post,
    {id: '3', createdDate: new Date(2021, 2, 2), title: 'What other good questions are there?', text: 'Something' } as Post,
    {id: '4', createdDate: new Date(2021, 3, 2), title: 'How many stars are there in the visible universe?', text: 'Something' } as Post,
    {id: '5', createdDate: new Date(2021, 4, 2), title: 'What lies beyond the visible universe?', text: 'Something' } as Post,
  ];

  constructor() { }

  public getPosts() {
    return this.posts;
  }

  public addPost(post: Post) {
    // do something to add a new post
    this.posts.push(post);
  }

  public deletePost(id: any) {
    // delete a post
  }

  private events: Event[] = [
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Søborg, Copenhagen',status:'published'} as Event,
    {eventId :'2',eventName :'Spring Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Lyngby, Copenhagen',status:'published'} as Event,
    {eventId :'1',eventName :'Autumn Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Valby, Copenhagen',status:'published'} as Event,
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Nørrebro, Copenhagen',status:'published'} as Event,
    {eventId :'1',eventName :'Winter Pride',startTime : '16:00',endTime :'19:00',createdDate:new Date(2021 , 5, 1),location:'Lygten, Copenhagen',status:'published'} as Event
  ];

  

  public getEvents() {
    return this.events;
  }

  public addEvent(event: Event) {
    // do something to add a new event
    this.events.push(event);
  }

  public deleteEvent(id: any) {
    //delete an event
  }

}


 

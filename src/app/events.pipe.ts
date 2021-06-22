import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './entities/Event';

@Pipe({
  name: 'filterEvents'

})
export class EventsPipe implements PipeTransform {

  transform(events: Event[], searchInput: string): Event[] {

    return events.filter(eventelement => eventelement.eventName.toLowerCase().includes(searchInput.toLowerCase()) || eventelement.location.toLowerCase().includes(searchInput.toLowerCase()));
  }

}

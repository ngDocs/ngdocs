import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CONTENT_URL_PREFIX} from 'app/documents/document.service';
import {Logger} from 'app/shared/logger.service';
import {ConnectableObservable, Observable, of} from 'rxjs';
import {catchError, publishLast} from 'rxjs/operators';

import {Event} from './events.component';

const eventsPath = CONTENT_URL_PREFIX + 'events.json';

@Injectable()
export class EventsService {
  events: Observable<Event[]>;

  constructor(private http: HttpClient, private logger: Logger) {
    this.events = this.getEvents();
  }

  private getEvents() {
    const events =
        this.http.get<any>(eventsPath)
            .pipe(
                catchError(error => {
                  this.logger.error(new Error(`${eventsPath} request failed: ${error.message}`));
                  return of([]);
                }),
                publishLast());
    (events as ConnectableObservable<Event[]>).connect();
    return events;
  }
}

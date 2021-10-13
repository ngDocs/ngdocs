import {SearchResults} from 'app/search/interfaces';
import {Subject} from 'rxjs';

export class MockSearchService {
  searchResults = new Subject<SearchResults>();
  initWorker = jasmine.createSpy('initWorker');
  loadIndex = jasmine.createSpy('loadIndex');
  search = jasmine.createSpy('search');
}

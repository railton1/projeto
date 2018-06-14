import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Catedral' },
      { id: 2, name: 'Torre de TV' },
      { id: 3, name: 'Museu Nacional' },
    ];
    return {heroes};
  }
}
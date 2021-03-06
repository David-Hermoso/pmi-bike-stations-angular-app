import {of} from 'rxjs';
import {BikeStationsListComponent} from './bike-stations-list.component';

describe('BikeStationsListComponent', () => {

  let component: BikeStationsListComponent;

  it('should dispatch showBikeStationInfo', () => {
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of([
        {
          img: null,
          id: '27',
          name: 'PL. PARIS',
          lng: 2.649158,
          lat: 39.584186,
          fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
          street: 'Plaça de París',
          streetNumber: 1,
          cp: '07010',
          town: 'Palma',
          region: 'Illes Balears'
        }
      ]))
    };
    component = new BikeStationsListComponent(mockStore as any);
    component.onBikeStationCardClicked({
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    });

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
  it('should set selectedBikeStation', done => {
    const bikeStation = {
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    };
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of(bikeStation)
      )
    };
    component = new BikeStationsListComponent(mockStore as any);

    mockStore.pipe().subscribe((selectedBikeStation) => {
      expect(selectedBikeStation).toStrictEqual(bikeStation);
      done();
    });
  });

  it('onCloseBikeStationInfo: should dispatch closeBikeStationInfo', () => {
    const bikeStation = {
      img: null,
      id: '27',
      name: 'PL. PARIS',
      lng: 2.649158,
      lat: 39.584186,
      fullAddress: 'Plaça de París, 1, 07010 Palma, Illes Balears',
      street: 'Plaça de París',
      streetNumber: 1,
      cp: '07010',
      town: 'Palma',
      region: 'Illes Balears'
    };
    const mockStore = {
      dispatch: jest.fn(),
      pipe: jest.fn(() => of(bikeStation)
      )
    };
    component = new BikeStationsListComponent(mockStore as any);
    component.onCloseBikeStationInfo();

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});

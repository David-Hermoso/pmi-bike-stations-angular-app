import {AppComponent} from './app.component';
import {of} from 'rxjs';
import {BikeStation} from './models/bike-station';

const deviceDetectorMock = {
  isDesktop: () => true
};

describe('AppComponent', () => {
  const bikeStation: BikeStation = {
    img: null,
    id: '32',
    name: 'PLAÇA BARCELONA',
    lng: 2.639351,
    lat: 39.580072,
    fullAddress: 'Plaça de Barcelona, 7, 07011 Palma, Illes Balears',
    street: 'Plaça de Barcelona',
    streetNumber: 7,
    cp: '07011',
    town: 'Palma',
    region: 'Illes Balears'
  };
  let component: AppComponent;
  const mockStore = {
    dispatch: jest.fn(),
    pipe: jest.fn(() => of(bikeStation)
    )
  };

  beforeEach(() => {
    component = new AppComponent(deviceDetectorMock as any, mockStore as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', done => {
    mockStore.pipe().subscribe((selectedBikeStation) => {
      expect(selectedBikeStation).toStrictEqual(bikeStation);
      done();
    });
  });

  it('onCloseBikeStationInfo: should dispatch closeBikeStationInfo', () => {
    component.onCloseBikeStationInfo();

    expect(mockStore.dispatch).toHaveBeenCalled();
  });
});

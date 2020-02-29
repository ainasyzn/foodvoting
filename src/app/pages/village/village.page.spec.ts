import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillagePage } from './village.page';

describe('VillagePage', () => {
  let component: VillagePage;
  let fixture: ComponentFixture<VillagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

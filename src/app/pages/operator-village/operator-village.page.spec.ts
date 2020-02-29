import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorVillagePage } from './operator-village.page';

describe('OperatorVillagePage', () => {
  let component: OperatorVillagePage;
  let fixture: ComponentFixture<OperatorVillagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorVillagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorVillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

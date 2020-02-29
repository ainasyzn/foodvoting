import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorRegistercafePage } from './operator-registercafe.page';

describe('OperatorRegistercafePage', () => {
  let component: OperatorRegistercafePage;
  let fixture: ComponentFixture<OperatorRegistercafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorRegistercafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorRegistercafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

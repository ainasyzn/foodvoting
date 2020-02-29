import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorHomePage } from './operator-home.page';

describe('OperatorHomePage', () => {
  let component: OperatorHomePage;
  let fixture: ComponentFixture<OperatorHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

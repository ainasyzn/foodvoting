import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatorMycafePage } from './operator-mycafe.page';

describe('OperatorMycafePage', () => {
  let component: OperatorMycafePage;
  let fixture: ComponentFixture<OperatorMycafePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorMycafePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatorMycafePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

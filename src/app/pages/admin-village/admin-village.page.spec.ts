import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminVillagePage } from './admin-village.page';

describe('AdminVillagePage', () => {
  let component: AdminVillagePage;
  let fixture: ComponentFixture<AdminVillagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVillagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminVillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

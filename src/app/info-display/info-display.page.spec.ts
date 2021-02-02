import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoDisplayPage } from './info-display.page';

describe('InfoDisplayPage', () => {
  let component: InfoDisplayPage;
  let fixture: ComponentFixture<InfoDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDisplayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

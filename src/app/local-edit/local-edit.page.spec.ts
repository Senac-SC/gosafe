import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalEditPage } from './local-edit.page';

describe('LocalEditPage', () => {
  let component: LocalEditPage;
  let fixture: ComponentFixture<LocalEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

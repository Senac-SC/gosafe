import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastraLocalPage } from './cadastra-local.page';

describe('CadastraLocalPage', () => {
  let component: CadastraLocalPage;
  let fixture: ComponentFixture<CadastraLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastraLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

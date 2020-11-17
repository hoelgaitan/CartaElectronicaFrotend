import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnsaladasComponent } from './ensaladas.component';

describe('EnsaladasComponent', () => {
  let component: EnsaladasComponent;
  let fixture: ComponentFixture<EnsaladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsaladasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnsaladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

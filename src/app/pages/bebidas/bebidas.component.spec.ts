import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BebidasComponent } from './bebidas.component';

describe('BebidasComponent', () => {
  let component: BebidasComponent;
  let fixture: ComponentFixture<BebidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

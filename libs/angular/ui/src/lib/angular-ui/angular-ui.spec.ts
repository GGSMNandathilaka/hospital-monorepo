import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularUi } from './angular-ui';

describe('AngularUi', () => {
  let component: AngularUi;
  let fixture: ComponentFixture<AngularUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularUi],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

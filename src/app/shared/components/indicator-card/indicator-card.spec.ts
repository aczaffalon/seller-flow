import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicatorCard } from './indicator-card';

describe('IndicatorCard', () => {
  let component: IndicatorCard;
  let fixture: ComponentFixture<IndicatorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicatorCard],
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

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

    fixture.componentRef.setInput('label', 'Total de vendas');
    fixture.componentRef.setInput('value', '1250');

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
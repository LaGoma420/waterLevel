import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TinacoPage } from './tinaco.page';

describe('TinacoPage', () => {
  let component: TinacoPage;
  let fixture: ComponentFixture<TinacoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TinacoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

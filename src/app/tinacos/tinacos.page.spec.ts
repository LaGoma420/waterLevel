import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TinacosPage } from './tinacos.page';

describe('TinacosPage', () => {
  let component: TinacosPage;
  let fixture: ComponentFixture<TinacosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TinacosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

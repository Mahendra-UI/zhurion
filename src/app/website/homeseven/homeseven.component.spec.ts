import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesevenComponent } from './homeseven.component';

describe('HomesevenComponent', () => {
  let component: HomesevenComponent;
  let fixture: ComponentFixture<HomesevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

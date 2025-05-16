import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefiveComponent } from './homefive.component';

describe('HomefiveComponent', () => {
  let component: HomefiveComponent;
  let fixture: ComponentFixture<HomefiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomefiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

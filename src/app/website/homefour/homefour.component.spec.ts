import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefourComponent } from './homefour.component';

describe('HomefourComponent', () => {
  let component: HomefourComponent;
  let fixture: ComponentFixture<HomefourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomefourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

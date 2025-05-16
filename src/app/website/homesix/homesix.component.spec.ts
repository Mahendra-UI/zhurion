import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesixComponent } from './homesix.component';

describe('HomesixComponent', () => {
  let component: HomesixComponent;
  let fixture: ComponentFixture<HomesixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

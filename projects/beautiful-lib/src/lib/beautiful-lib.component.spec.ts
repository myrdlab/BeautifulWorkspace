import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifulLibComponent } from './beautiful-lib.component';

describe('BeautifulLibComponent', () => {
  let component: BeautifulLibComponent;
  let fixture: ComponentFixture<BeautifulLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeautifulLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautifulLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

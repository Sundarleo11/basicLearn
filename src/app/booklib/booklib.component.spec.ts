import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklibComponent } from './booklib.component';

describe('BooklibComponent', () => {
  let component: BooklibComponent;
  let fixture: ComponentFixture<BooklibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

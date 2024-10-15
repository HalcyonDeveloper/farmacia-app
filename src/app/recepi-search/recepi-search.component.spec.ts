import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiSearchComponent } from './recepi-search.component';

describe('RecepiSearchComponent', () => {
  let component: RecepiSearchComponent;
  let fixture: ComponentFixture<RecepiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepiSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

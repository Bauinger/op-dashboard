import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogEntryComponent } from './add-log-entry.component';

describe('AddLogEntryComponent', () => {
  let component: AddLogEntryComponent;
  let fixture: ComponentFixture<AddLogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLogEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

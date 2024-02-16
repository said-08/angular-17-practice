import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseComponent } from './morse.component';

describe('MorseComponent', () => {
  let component: MorseComponent;
  let fixture: ComponentFixture<MorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

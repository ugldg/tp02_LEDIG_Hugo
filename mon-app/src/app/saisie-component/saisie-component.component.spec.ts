import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieComponentComponent } from './saisie-component.component';

describe('SaisieComponentComponent', () => {
  let component: SaisieComponentComponent;
  let fixture: ComponentFixture<SaisieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherConceptsComponent } from './other-concepts.component';

describe('OtherConceptsComponent', () => {
  let component: OtherConceptsComponent;
  let fixture: ComponentFixture<OtherConceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherConceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMidiaComponent } from './social-midia.component';

describe('SocialMidiaComponent', () => {
  let component: SocialMidiaComponent;
  let fixture: ComponentFixture<SocialMidiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMidiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

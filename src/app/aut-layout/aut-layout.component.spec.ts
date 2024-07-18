import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutLayoutComponent } from './aut-layout.component';

describe('AutLayoutComponent', () => {
  let component: AutLayoutComponent;
  let fixture: ComponentFixture<AutLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

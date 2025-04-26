import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveOverviewComponent } from './live-overview.component';

describe('LiveOverviewComponent', () => {
  let component: LiveOverviewComponent;
  let fixture: ComponentFixture<LiveOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LobehubIconComponent } from './lobehub-icon.component';
import { OPTIONS_TOKEN } from './options.provider';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Test Host Component
@Component({
  selector: 'app-test-host',
  template: `<lobehub-icon [name]="iconName" class="test-icon"></lobehub-icon>`,
  imports: [LobehubIconComponent],
})
class TestHostComponent {
  iconName = 'test-icon';
}

describe('LobehubIconComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let iconDebugElement: DebugElement;
  let iconElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [
        {
          provide: OPTIONS_TOKEN,
          useValue: [],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    iconDebugElement = fixture.debugElement.query(By.directive(LobehubIconComponent));
    iconElement = iconDebugElement.nativeElement;
  });

  it('should create', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should render component', () => {
    fixture.detectChanges();
    expect(iconElement).toBeTruthy();
  });

  it('should have proper selector', () => {
    expect(iconDebugElement.name).toBe('lobehub-icon');
  });
});


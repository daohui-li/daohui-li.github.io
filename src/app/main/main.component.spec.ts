import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { By } from '@angular/platform-browser';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

  it('should emit close event when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const eventSpy = spyOn(component.openDrawerEvent, 'emit').and.stub();
    button.nativeElement.click();
    fixture.detectChanges();

    expect(eventSpy).toHaveBeenCalledWith(true);
  });
});

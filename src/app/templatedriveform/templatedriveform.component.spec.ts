import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedriveformComponent } from './templatedriveform.component';

describe('TemplatedriveformComponent', () => {
  let component: TemplatedriveformComponent;
  let fixture: ComponentFixture<TemplatedriveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedriveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedriveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

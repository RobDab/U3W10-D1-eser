import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSubmitComponent } from './search-submit.component';

describe('SearchSubmitComponent', () => {
  let component: SearchSubmitComponent;
  let fixture: ComponentFixture<SearchSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

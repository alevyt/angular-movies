import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.app-title');
    expect(titleElement?.textContent).toContain('Movie Search App');
  });

  it('should have a logo image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement?.src).toContain('assets/logo.png'); // Adjust this if the logo path is different
  });
});
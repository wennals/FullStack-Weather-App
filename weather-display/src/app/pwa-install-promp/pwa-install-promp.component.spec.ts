import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PwaInstallPromptComponent } from "./pwa-install-promp.component";

describe("PwaInstallPrompComponent", () => {
  let component: PwaInstallPromptComponent;
  let fixture: ComponentFixture<PwaInstallPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PwaInstallPromptComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaInstallPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

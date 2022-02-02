import { Component, Inject, OnInit } from "@angular/core";
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA
} from "@angular/material/bottom-sheet";

@Component({
  selector: "app-pwa-install-promp",
  templateUrl: "./pwa-install-promp.component.html",
  styleUrls: ["./pwa-install-promp.component.scss"]
})
export class PwaInstallPromptComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: { mobileType: "ios" | "other"; promptEvent?: any },
    private bottomSheetRef: MatBottomSheetRef<PwaInstallPromptComponent>
  ) {}

  ngOnInit(): void {}

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }
}

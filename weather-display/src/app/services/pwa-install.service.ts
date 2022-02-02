import { Platform } from "@angular/cdk/platform";
import { Injectable } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { timer } from "rxjs";

import { take } from "rxjs/operators";
import { PwaInstallPromptComponent } from "../pwa-install-promp/pwa-install-promp.component";

@Injectable({
  providedIn: "root"
})
export class PwaInstallService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) {}

  public initPwaPrompt() {
    if (this.platform.ANDROID || this.platform.isBrowser) {
      window.addEventListener("beforeinstallprompt", (event: any) => {
        console.log("caught");
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent("other");
      });
    }
    if (this.platform.IOS) {
      const isInStandaloneMode =
        "standalone" in window.navigator && window.navigator["standalone"];
      if (!isInStandaloneMode) {
        this.openPromptComponent("ios");
      }
    }
  }

  private openPromptComponent(mobileType: "ios" | "other") {
    timer(3000)
      .pipe(take(1))
      .subscribe(() =>
        this.bottomSheet.open(PwaInstallPromptComponent, {
          data: { mobileType, promptEvent: this.promptEvent }
        })
      );
  }
}

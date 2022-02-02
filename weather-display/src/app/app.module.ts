import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";

import { WeatherModule } from "./weather-dashboard/weather.module";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PwaInstallPromptComponent } from "./pwa-install-promp/pwa-install-promp.component";
import { PwaInstallService } from "./services/pwa-install.service";

const initializer = (pwaService: PwaInstallService) => () =>
  pwaService.initPwaPrompt();

@NgModule({
  declarations: [AppComponent, PwaInstallPromptComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    WeatherModule,
    MatToolbarModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000"
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [PwaInstallService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

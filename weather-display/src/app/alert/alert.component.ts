import { Component, Inject } from "@angular/core";
import { WeatherResponse } from "../models/weather-response.interface";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "alert-component",
  templateUrl: "./alert.component.html",
  styleUrls: []
})
export class AlertComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WeatherResponse["alerts"]
  ) {}
}

import { Component, Input, Inject } from "@angular/core";
import { WeatherData } from "../models/weather.interface";
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
    @Inject(MAT_DIALOG_DATA) public data: WeatherData["alerts"]
  ) {}
}

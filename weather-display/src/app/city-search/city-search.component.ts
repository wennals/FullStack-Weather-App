import { Component, OnInit, Input, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { MatOption } from "@angular/material/core";

@Component({
  selector: "city-search",
  templateUrl: "./city-search.component.html",
  styleUrls: ["./city-search.component.scss"]
})
export class CitySearchComponent implements OnInit {
  @Input("matAutocompletePosition") position = "below";
  @Input()
  locationOptions: string[];
  @Output() locationQuery: EventEmitter<string> = new EventEmitter();
  search: FormControl = new FormControl("", [Validators.required]);
  @Output() weatherQuery: EventEmitter<string> = new EventEmitter();
  isValidSearch: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.search.setValue("Baltimore,MD,USA");
    this.weatherQuery.emit(this.search.value);
    this.search.valueChanges.subscribe((value: string) => {
      if (this.search.valid) {
        this.locationQuery.emit(value);
      }
    });
  }

  validateSearchTerm(search: FormControl) {
    if (search.value in this.locationOptions) {
      return null;
    }
    return {
      isValidSearch: {
        valid: false
      }
    };
  }

  onLocationSelected(event: MatOption) {
    if (this.validateSearchTerm(this.search)) {
      this.weatherQuery.emit(event.value);
    }
  }
}

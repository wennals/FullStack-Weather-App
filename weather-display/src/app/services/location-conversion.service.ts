import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LocationConverstionService {
  constructor(private httpClient: HttpClient) {}

  getLocationList(location: string): Observable<string[]> {
    console.log(location);
    return this.httpClient.get<string[]>(
      `/api/get-auto-complete-locations/${location}`
    );
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LocationConverstionService {
  constructor(private httpClient: HttpClient) {}

  getLocationList(location: string): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `/api/get-auto-complete-locations/${location}`
    );
  }
}

import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annually','Lifetime'])
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    //return of(userSettings);
    return this.http.post('https://putsreq.com/NHmEsqeOv7O2vM4wtR4E', userSettings);
  }
}

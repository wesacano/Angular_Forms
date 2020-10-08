import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  singleModel = "On";

  startDate: Date;
  startTime: Date;
  userRating = 0;
  maxRating = 10;
  userSettings: UserSettings = { ...this.originalUserSettings };
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  constructor(private dataService: DataService) {}

  onSubmit(form: NgForm) {
    console.log('in on submit: ', form.value);

    // if (form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success: ', result),
    //     error => this.onHttpError(error)
    //   );
    // } else {
    //   this.postError = true;
    //   this.postErrorMessage = 'Please fix the above errors';
    // }


  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onBlur(field: NgModel) {
    console.log('in on blur: ', field.valid);
  }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }
}

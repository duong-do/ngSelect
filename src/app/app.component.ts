import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { AppService } from './app.service';
import { CompleterService, CompleterData, LocalData, RemoteData } from 'ng-mdb-pro/pro/autocomplete';
import { CountryModel } from './country.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  countries: Array<CountryModel>;
  countryCookieName = 'countryCookie';

  dateOptionsSelect: any = [
    {value: '', label: ''}
    ];
  selectedValue: string;
  selectedCountry = '';

  constructor(
    private completerService: CompleterService,
    private appService: AppService,
    private cookieService: CookieService) {
      this.countryCookieName = 'countryCookie';
      // this.fillCountryDS(this.countries);
    this.appService.getCountries().subscribe(data => {
      if (!this.cookieService.check(this.countryCookieName)) {
        this.cookieService.set(this.countryCookieName, JSON.stringify(data));
        const test = JSON.parse(this.cookieService.get(this.countryCookieName));
      }

      this.fillCountryDS(data);
    });
  }
  ngOnInit() {
  }

  fillCountryDS(data) {
    // if (this.cookieService.check(this.countryCookieName)) {
      data = JSON.parse(this.cookieService.get(this.countryCookieName));
    // }
    this.countries = data;
    this.countries.forEach(c => {
      c.value = c.code;
      c.label = c.name;
    });

    this.selectedCountry = this.countries[6].value;
    console.log(this.countries[6].value);

    // this.selectedValue = this.dateOptionsSelect;
    this.dateOptionsSelect = [
      { value: '1', label: 'Today'},
      { value: '2', label: 'Yesterday' },
      { value: '3', label: 'Last 7 days', selected: true },
      { value: '4', label: 'Last 30 days' },
      { value: '5', label: 'Last week' },
      { value: '6', label: 'Last month' }
      ];

    this.selectedValue = this.dateOptionsSelect[3].value;
    console.log(this.dateOptionsSelect[3].value);
  }

  onTextChangeCountry() {
  }

  onSelectChangeCountry(evnt: any) {
  }
}

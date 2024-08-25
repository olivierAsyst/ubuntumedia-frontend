/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addCountry } from '../fn/country-controller/add-country';
import { AddCountry$Params } from '../fn/country-controller/add-country';
import { getCountries } from '../fn/country-controller/get-countries';
import { GetCountries$Params } from '../fn/country-controller/get-countries';
import { getCountry } from '../fn/country-controller/get-country';
import { GetCountry$Params } from '../fn/country-controller/get-country';
import { getCountryByCodePhone } from '../fn/country-controller/get-country-by-code-phone';
import { GetCountryByCodePhone$Params } from '../fn/country-controller/get-country-by-code-phone';
import { getCountryByName } from '../fn/country-controller/get-country-by-name';
import { GetCountryByName$Params } from '../fn/country-controller/get-country-by-name';
import { updateCountry } from '../fn/country-controller/update-country';
import { UpdateCountry$Params } from '../fn/country-controller/update-country';

@Injectable({ providedIn: 'root' })
export class CountryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCountry()` */
  static readonly GetCountryPath = '/countries/{idCountry}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountry$Response(params: GetCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountry(params: GetCountry$Params, context?: HttpContext): Observable<{
}> {
    return this.getCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateCountry()` */
  static readonly UpdateCountryPath = '/countries/{idCountry}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCountry()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCountry$Response(params: UpdateCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCountry$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCountry(params: UpdateCountry$Params, context?: HttpContext): Observable<{
}> {
    return this.updateCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getCountries()` */
  static readonly GetCountriesPath = '/countries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCountries()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountries$Response(params?: GetCountries$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getCountries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCountries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountries(params?: GetCountries$Params, context?: HttpContext): Observable<{
}> {
    return this.getCountries$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addCountry()` */
  static readonly AddCountryPath = '/countries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCountry()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCountry$Response(params: AddCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCountry$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCountry(params: AddCountry$Params, context?: HttpContext): Observable<{
}> {
    return this.addCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getCountryByName()` */
  static readonly GetCountryByNamePath = '/countries/byname/{nameFrench}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCountryByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountryByName$Response(params: GetCountryByName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getCountryByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCountryByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountryByName(params: GetCountryByName$Params, context?: HttpContext): Observable<{
}> {
    return this.getCountryByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getCountryByCodePhone()` */
  static readonly GetCountryByCodePhonePath = '/countries/bycode/{codePhone}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCountryByCodePhone()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountryByCodePhone$Response(params: GetCountryByCodePhone$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getCountryByCodePhone(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCountryByCodePhone$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCountryByCodePhone(params: GetCountryByCodePhone$Params, context?: HttpContext): Observable<{
}> {
    return this.getCountryByCodePhone$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}

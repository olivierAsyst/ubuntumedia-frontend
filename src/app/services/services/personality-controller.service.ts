/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addPersonality } from '../fn/personality-controller/add-personality';
import { AddPersonality$Params } from '../fn/personality-controller/add-personality';
import { getAllPersonality } from '../fn/personality-controller/get-all-personality';
import { GetAllPersonality$Params } from '../fn/personality-controller/get-all-personality';
import { getAllPersonalityByCountry } from '../fn/personality-controller/get-all-personality-by-country';
import { GetAllPersonalityByCountry$Params } from '../fn/personality-controller/get-all-personality-by-country';
import { getPersonalitiesByProfession } from '../fn/personality-controller/get-personalities-by-profession';
import { GetPersonalitiesByProfession$Params } from '../fn/personality-controller/get-personalities-by-profession';
import { getPersonality } from '../fn/personality-controller/get-personality';
import { GetPersonality$Params } from '../fn/personality-controller/get-personality';
import { updatePersonality } from '../fn/personality-controller/update-personality';
import { UpdatePersonality$Params } from '../fn/personality-controller/update-personality';

@Injectable({ providedIn: 'root' })
export class PersonalityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPersonality()` */
  static readonly GetPersonalityPath = '/personality/{idPersonality}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPersonality()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPersonality$Response(params: GetPersonality$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getPersonality(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPersonality$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPersonality(params: GetPersonality$Params, context?: HttpContext): Observable<{
}> {
    return this.getPersonality$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updatePersonality()` */
  static readonly UpdatePersonalityPath = '/personality/{idPersonality}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePersonality()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePersonality$Response(params: UpdatePersonality$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updatePersonality(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePersonality$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePersonality(params: UpdatePersonality$Params, context?: HttpContext): Observable<{
}> {
    return this.updatePersonality$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllPersonality()` */
  static readonly GetAllPersonalityPath = '/personality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPersonality()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPersonality$Response(params?: GetAllPersonality$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllPersonality(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPersonality$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPersonality(params?: GetAllPersonality$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllPersonality$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addPersonality()` */
  static readonly AddPersonalityPath = '/personality';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPersonality()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPersonality$Response(params: AddPersonality$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addPersonality(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addPersonality$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPersonality(params: AddPersonality$Params, context?: HttpContext): Observable<{
}> {
    return this.addPersonality$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getPersonalitiesByProfession()` */
  static readonly GetPersonalitiesByProfessionPath = '/personality/profession/{professionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPersonalitiesByProfession()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPersonalitiesByProfession$Response(params: GetPersonalitiesByProfession$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getPersonalitiesByProfession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPersonalitiesByProfession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPersonalitiesByProfession(params: GetPersonalitiesByProfession$Params, context?: HttpContext): Observable<{
}> {
    return this.getPersonalitiesByProfession$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllPersonalityByCountry()` */
  static readonly GetAllPersonalityByCountryPath = '/personality/country/{countryId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPersonalityByCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPersonalityByCountry$Response(params: GetAllPersonalityByCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllPersonalityByCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPersonalityByCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPersonalityByCountry(params: GetAllPersonalityByCountry$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllPersonalityByCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}

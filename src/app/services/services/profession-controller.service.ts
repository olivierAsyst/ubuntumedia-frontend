/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addProfession } from '../fn/profession-controller/add-profession';
import { AddProfession$Params } from '../fn/profession-controller/add-profession';
import { getAllProfession } from '../fn/profession-controller/get-all-profession';
import { GetAllProfession$Params } from '../fn/profession-controller/get-all-profession';
import { getProfession } from '../fn/profession-controller/get-profession';
import { GetProfession$Params } from '../fn/profession-controller/get-profession';
import { updateProfession } from '../fn/profession-controller/update-profession';
import { UpdateProfession$Params } from '../fn/profession-controller/update-profession';

@Injectable({ providedIn: 'root' })
export class ProfessionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getProfession()` */
  static readonly GetProfessionPath = '/professions/{idProfession}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProfession()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfession$Response(params: GetProfession$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getProfession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProfession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProfession(params: GetProfession$Params, context?: HttpContext): Observable<{
}> {
    return this.getProfession$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateProfession()` */
  static readonly UpdateProfessionPath = '/professions/{idProfession}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProfession()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfession$Response(params: UpdateProfession$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateProfession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProfession$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProfession(params: UpdateProfession$Params, context?: HttpContext): Observable<{
}> {
    return this.updateProfession$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllProfession()` */
  static readonly GetAllProfessionPath = '/professions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllProfession()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProfession$Response(params?: GetAllProfession$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllProfession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllProfession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProfession(params?: GetAllProfession$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllProfession$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addProfession()` */
  static readonly AddProfessionPath = '/professions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addProfession()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProfession$Response(params: AddProfession$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addProfession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addProfession$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addProfession(params: AddProfession$Params, context?: HttpContext): Observable<{
}> {
    return this.addProfession$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}

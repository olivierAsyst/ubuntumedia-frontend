/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addSuggestion } from '../fn/suggestion-controller/add-suggestion';
import { AddSuggestion$Params } from '../fn/suggestion-controller/add-suggestion';
import { getAllSugestion } from '../fn/suggestion-controller/get-all-sugestion';
import { GetAllSugestion$Params } from '../fn/suggestion-controller/get-all-sugestion';
import { getSugestionByArticle } from '../fn/suggestion-controller/get-sugestion-by-article';
import { GetSugestionByArticle$Params } from '../fn/suggestion-controller/get-sugestion-by-article';
import { getSuggestion } from '../fn/suggestion-controller/get-suggestion';
import { GetSuggestion$Params } from '../fn/suggestion-controller/get-suggestion';

@Injectable({ providedIn: 'root' })
export class SuggestionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllSugestion()` */
  static readonly GetAllSugestionPath = '/suggestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSugestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSugestion$Response(params?: GetAllSugestion$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllSugestion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSugestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSugestion(params?: GetAllSugestion$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllSugestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addSuggestion()` */
  static readonly AddSuggestionPath = '/suggestions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addSuggestion()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSuggestion$Response(params: AddSuggestion$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addSuggestion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addSuggestion$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addSuggestion(params: AddSuggestion$Params, context?: HttpContext): Observable<{
}> {
    return this.addSuggestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getSuggestion()` */
  static readonly GetSuggestionPath = '/suggestions/{idSuggestion}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSuggestion()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuggestion$Response(params: GetSuggestion$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getSuggestion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSuggestion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSuggestion(params: GetSuggestion$Params, context?: HttpContext): Observable<{
}> {
    return this.getSuggestion$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getSugestionByArticle()` */
  static readonly GetSugestionByArticlePath = '/suggestions/article/{idArticle}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSugestionByArticle()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSugestionByArticle$Response(params: GetSugestionByArticle$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getSugestionByArticle(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSugestionByArticle$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSugestionByArticle(params: GetSugestionByArticle$Params, context?: HttpContext): Observable<{
}> {
    return this.getSugestionByArticle$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}

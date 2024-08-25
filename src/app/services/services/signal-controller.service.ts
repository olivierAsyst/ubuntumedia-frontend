/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAllSignal } from '../fn/signal-controller/get-all-signal';
import { GetAllSignal$Params } from '../fn/signal-controller/get-all-signal';
import { getSignal } from '../fn/signal-controller/get-signal';
import { GetSignal$Params } from '../fn/signal-controller/get-signal';
import { getSignalByComment } from '../fn/signal-controller/get-signal-by-comment';
import { GetSignalByComment$Params } from '../fn/signal-controller/get-signal-by-comment';
import { sendSignal } from '../fn/signal-controller/send-signal';
import { SendSignal$Params } from '../fn/signal-controller/send-signal';

@Injectable({ providedIn: 'root' })
export class SignalControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getAllSignal()` */
  static readonly GetAllSignalPath = '/signales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllSignal()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSignal$Response(params?: GetAllSignal$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllSignal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllSignal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllSignal(params?: GetAllSignal$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllSignal$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `sendSignal()` */
  static readonly SendSignalPath = '/signales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendSignal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendSignal$Response(params: SendSignal$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return sendSignal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendSignal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendSignal(params: SendSignal$Params, context?: HttpContext): Observable<{
}> {
    return this.sendSignal$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getSignal()` */
  static readonly GetSignalPath = '/signales/{idSignal}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSignal()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSignal$Response(params: GetSignal$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getSignal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSignal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSignal(params: GetSignal$Params, context?: HttpContext): Observable<{
}> {
    return this.getSignal$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getSignalByComment()` */
  static readonly GetSignalByCommentPath = '/signales/comment/{idComment}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSignalByComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSignalByComment$Response(params: GetSignalByComment$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getSignalByComment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSignalByComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSignalByComment(params: GetSignalByComment$Params, context?: HttpContext): Observable<{
}> {
    return this.getSignalByComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}

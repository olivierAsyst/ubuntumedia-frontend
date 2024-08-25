/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addVote } from '../fn/vote-controller/add-vote';
import { AddVote$Params } from '../fn/vote-controller/add-vote';
import { getVote } from '../fn/vote-controller/get-vote';
import { GetVote$Params } from '../fn/vote-controller/get-vote';
import { voteForCandidate } from '../fn/vote-controller/vote-for-candidate';
import { VoteForCandidate$Params } from '../fn/vote-controller/vote-for-candidate';

@Injectable({ providedIn: 'root' })
export class VoteControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getVote()` */
  static readonly GetVotePath = '/vote/{idVote}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getVote()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVote$Response(params: GetVote$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getVote(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getVote$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getVote(params: GetVote$Params, context?: HttpContext): Observable<{
}> {
    return this.getVote$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `voteForCandidate()` */
  static readonly VoteForCandidatePath = '/vote/{idVote}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `voteForCandidate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  voteForCandidate$Response(params: VoteForCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return voteForCandidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `voteForCandidate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  voteForCandidate(params: VoteForCandidate$Params, context?: HttpContext): Observable<{
}> {
    return this.voteForCandidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addVote()` */
  static readonly AddVotePath = '/vote';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addVote()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addVote$Response(params: AddVote$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addVote(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addVote$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addVote(params: AddVote$Params, context?: HttpContext): Observable<{
}> {
    return this.addVote$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}

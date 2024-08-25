/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Candidate } from '../../models/candidate';

export interface VoteForCandidate$Params {
  idVote: number;
      body: Candidate
}

export function voteForCandidate(http: HttpClient, rootUrl: string, params: VoteForCandidate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, voteForCandidate.PATH, 'put');
  if (params) {
    rb.path('idVote', params.idVote, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

voteForCandidate.PATH = '/vote/{idVote}';

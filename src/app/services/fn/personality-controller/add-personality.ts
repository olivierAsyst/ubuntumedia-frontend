/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Personality } from '../../models/personality';

export interface AddPersonality$Params {
  country: number;
  professions?: Array<number>;
      body: Personality
}

export function addPersonality(http: HttpClient, rootUrl: string, params: AddPersonality$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, addPersonality.PATH, 'post');
  if (params) {
    rb.query('country', params.country, {});
    rb.query('professions', params.professions, {});
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

addPersonality.PATH = '/personality';

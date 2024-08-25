/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetPersonalitiesByProfession$Params {
  professionId: number;
}

export function getPersonalitiesByProfession(http: HttpClient, rootUrl: string, params: GetPersonalitiesByProfession$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, getPersonalitiesByProfession.PATH, 'get');
  if (params) {
    rb.path('professionId', params.professionId, {});
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

getPersonalitiesByProfession.PATH = '/personality/profession/{professionId}';
